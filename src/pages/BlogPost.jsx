import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import DOMPurify from 'dompurify';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Calendar, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                // 1. Fetch current post
                const { data, error } = await supabase
                    .from('posts')
                    .select('*')
                    .eq('slug', slug)
                    .single();

                if (error) throw error;
                
                if (data) {
                    if (!data.published) {
                        navigate('/blog');
                        return;
                    }
                    setPost(data);

                    // 2. Fetch related posts (latest 3 excluding current)
                    const { data: related, error: relatedError } = await supabase
                        .from('posts')
                        .select('id, title, slug, thumbnail_url, created_at')
                        .eq('published', true)
                        .neq('id', data.id)
                        .limit(3)
                        .order('created_at', { ascending: false });

                    if (!relatedError) {
                        setRelatedPosts(related || []);
                    }
                } else {
                    navigate('/blog');
                }
            } catch (error) {
                console.error("Error fetching post data:", error);
                navigate('/blog');
            } finally {
                setLoading(false);
            }
        };

        fetchPostData();
    }, [slug, navigate]);

    if (loading) {
        return <div className="post-loading"><div className="spinner"></div></div>;
    }

    if (!post) {
        return null; // redirecting
    }

    // Sanitize the HTML from React Quill
    const cleanHTML = DOMPurify.sanitize(post.content);

    const shareUrl = window.location.href;

    // Structured Data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.thumbnail_url,
        "author": {
            "@type": "Organization",
            "name": "AceWeb"
        },
        "publisher": {
            "@type": "Organization",
            "name": "AceWeb",
            "logo": {
                "@type": "ImageObject",
                "url": "https://acewebsites.com.br/logo.png"
            }
        },
        "datePublished": post.created_at,
        "dateModified": post.updated_at || post.created_at,
        "description": post.meta_description,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": shareUrl
        }
    };

    // Custom overrides for Quill formatting on public side
    const quillCSS = `
        .post-content h2 { font-size: 2rem; margin-top: 2rem; margin-bottom: 1rem; color: var(--color-primary); }
        .post-content h3 { font-size: 1.5rem; margin-top: 1.5rem; margin-bottom: 1rem; }
        .post-content p { line-height: 1.8; font-size: 1.1rem; color: var(--color-gray-300); margin-bottom: 1.2rem; }
        .post-content ul, .post-content ol { padding-left: 2rem; margin-bottom: 1.5rem; color: var(--color-gray-300); line-height: 1.8;}
        .post-content li { margin-bottom: 0.5rem; }
        .post-content a { color: var(--color-primary); text-decoration: underline; }
        .post-content blockquote { border-left: 4px solid var(--color-primary); padding-left: 1rem; margin-left: 0; font-style: italic; color: var(--color-gray-400); }
        .post-content img { max-width: 100%; height: auto; border-radius: var(--radius-lg); margin: 2rem 0; box-shadow: var(--shadow-lg); }
    `;

    return (
        <main className="post-page">
            <style>{quillCSS}</style>
            
            <SEO 
                title={post.title}
                description={post.meta_description}
                canonical={`/blog/${post.slug}`}
                image={post.thumbnail_url}
                keywords={post.tags?.join(', ')}
            />

            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>

            <article className="post-article">
                {/* Hero / Header */}
                <header className="post-header">
                    <div className="container">
                        <Link to="/blog" className="post-back-link">
                            <ArrowLeft size={16} />
                            Voltar para o Blog
                        </Link>
                        
                        <div className="post-meta">
                            {post.created_at && (
                                <span className="post-meta-item">
                                    <Calendar size={16} />
                                    {format(new Date(post.created_at), "dd 'de' MMMM, yyyy", { locale: ptBR })}
                                </span>
                            )}
                            <div className="post-tags-header">
                                {post.tags?.map(t => (
                                    <span key={t} className="post-meta-item tag">
                                        <Tag size={14} /> {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h1 className="post-title">{post.title}</h1>
                    </div>
                </header>

                <div className="container post-container">
                    <div className="post-layout">
                        
                        {/* Main Content */}
                        <div className="post-main">
                            {post.thumbnail_url && (
                                <div className="post-cover">
                                    <img src={post.thumbnail_url} alt={post.title} />
                                </div>
                            )}

                            <div className="post-body">
                                <motion.div 
                                    className="post-content"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    dangerouslySetInnerHTML={{ __html: cleanHTML }} 
                                />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="post-sidebar">
                            {relatedPosts.length > 0 && (
                                <div className="sidebar-widget">
                                    <h3>Artigos Relacionados</h3>
                                    <div className="related-posts-list">
                                        {relatedPosts.map(rp => (
                                            <Link to={`/blog/${rp.slug}`} key={rp.id} className="related-post-card">
                                                <div className="related-post-thumb">
                                                    <img src={rp.thumbnail_url || 'https://acewebsites.com.br/og-image.jpg'} alt={rp.title} />
                                                </div>
                                                <div className="related-post-info">
                                                    <h4>{rp.title}</h4>
                                                    <span>{format(new Date(rp.created_at), "dd 'de' MMM", { locale: ptBR })}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="sidebar-widget">
                                <h3>Compartilhar</h3>
                                <div className="share-buttons">
                                    <a 
                                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="share-btn whatsapp"
                                    >
                                        <Share2 size={16} /> WhatsApp
                                    </a>
                                </div>
                            </div>
                            
                            <div className="sidebar-widget bg-cta">
                                <h3>Gostou do conteúdo?</h3>
                                <p>A AceWeb é especialista em transformar negócios através de sites de alta performance. Aplique este conhecimento ou contrate quem entende do assunto.</p>
                                <Link to="/contato" className="btn btn-primary btn-sm">
                                    Falar com Especialista
                                </Link>
                            </div>
                        </aside>

                    </div>
                </div>
            </article>
        </main>
    );
};

export default BlogPost;
