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
                {/* Top Header Section */}
                <header className="post-header-new">
                    <div className="container">
                        <Link to="/blog" className="post-back-link">
                            <ArrowLeft size={16} /> Voltar para o Blog
                        </Link>
                        <h1 className="post-title-main">{post.title}</h1>
                        
                        <div className="post-author-meta">
                            <div className="author-info">
                                <div className="author-avatar">
                                    <img src="https://acewebsites.com.br/favicon.png" alt="AceWeb Team" />
                                </div>
                                <div className="author-details">
                                    <span className="author-name">Equipe AceWeb</span>
                                    <span className="post-date">
                                        Publicado em {format(new Date(post.created_at), "dd 'de' MMMM, yyyy", { locale: ptBR })}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="header-share-links">
                                <span>Compartilhar:</span>
                                <div className="share-icons">
                                    <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer"><Share2 size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container post-container-new">
                    <div className="post-grid-layout">
                        
                        {/* LEFT: Sticky Social Bar */}
                        <aside className="post-social-sticky">
                            <div className="social-sticky-inner">
                                <span className="share-label">SHARE</span>
                                <div className="sticky-icons">
                                    <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="sticky-link whatsapp">
                                        <Share2 size={20} />
                                    </a>
                                    {/* Add more icons if needed */}
                                </div>
                            </div>
                        </aside>

                        {/* MIDDLE: Main Content Area */}
                        <div className="post-main-content">
                            {post.thumbnail_url && (
                                <div className="post-hero-image">
                                    <img src={post.thumbnail_url} alt={post.title} />
                                </div>
                            )}

                            <div className="post-text-content">
                                <motion.div 
                                    className="post-content"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    dangerouslySetInnerHTML={{ __html: cleanHTML }} 
                                />
                            </div>
                        </div>

                        {/* RIGHT: Sidebar */}
                        <aside className="post-right-sidebar">
                            <div className="sidebar-widget-new">
                                <h3>Posts Recentes</h3>
                                <div className="recent-posts-list">
                                    {relatedPosts.length > 0 ? (
                                        relatedPosts.map(rp => (
                                            <Link to={`/blog/${rp.slug}`} key={rp.id} className="recent-post-item">
                                                <div className="recent-thumb">
                                                    <img src={rp.thumbnail_url || 'https://acewebsites.com.br/og-image.jpg'} alt={rp.title} />
                                                </div>
                                                <div className="recent-info">
                                                    <h4>{rp.title}</h4>
                                                    <span>{format(new Date(rp.created_at), "dd 'de' MMM", { locale: ptBR })}</span>
                                                </div>
                                            </Link>
                                        ))
                                    ) : (
                                        <p>Nenhum outro post encontrado.</p>
                                    )}
                                </div>
                            </div>

                            <div className="sidebar-widget-new bg-accent">
                                <h3>AceWeb Consultoria</h3>
                                <p>Criamos sites de alta conversão que colocam sua empresa no topo do Google.</p>
                                <Link to="/contato" className="btn btn-primary btn-sm btn-block">
                                    Pedir Orçamento
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
