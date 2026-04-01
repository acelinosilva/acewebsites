import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '../lib/firebase/config';
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const q = query(collection(db, 'posts'), where('slug', '==', slug), limit(1));
                const querySnapshot = await getDocs(q);
                
                if (!querySnapshot.empty) {
                    const postData = querySnapshot.docs[0].data();
                    if (!postData.published) {
                        // User trying to view unpublished without admin context => hide
                        navigate('/blog');
                        return;
                    }
                    setPost({ id: querySnapshot.docs[0].id, ...postData });
                } else {
                    navigate('/blog');
                }
            } catch (error) {
                console.error("Error fetching post:", error);
                navigate('/blog');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
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
                description={post.metaDescription}
                canonical={`/blog/${post.slug}`}
                image={post.thumbnailUrl}
                keywords={post.tags?.join(', ')}
            />

            <article className="post-article">
                {/* Hero / Header */}
                <header className="post-header">
                    <div className="container">
                        <Link to="/blog" className="post-back-link">
                            <ArrowLeft size={16} />
                            Voltar para o Blog
                        </Link>
                        
                        <div className="post-meta">
                            {post.createdAt && (
                                <span className="post-meta-item">
                                    <Calendar size={16} />
                                    {format(post.createdAt.toDate(), "dd 'de' MMMM, yyyy", { locale: ptBR })}
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
                            {post.thumbnailUrl && (
                                <div className="post-cover">
                                    <img src={post.thumbnailUrl} alt={post.title} />
                                </div>
                            )}

                            <motion.div 
                                className="post-content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                dangerouslySetInnerHTML={{ __html: cleanHTML }} 
                            />
                        </div>

                        {/* Sidebar */}
                        <aside className="post-sidebar">
                            <div className="sidebar-widget">
                                <h3>Compartilhar Artigo</h3>
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
