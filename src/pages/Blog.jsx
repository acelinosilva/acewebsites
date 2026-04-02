import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import './Blog.css';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const { data, error: fetchError } = await supabase
                .from('posts')
                .select('*')
                .eq('published', true)
                .order('created_at', { ascending: false });

            if (fetchError) throw fetchError;

            setPosts(data || []);
        } catch (err) {
            console.error('Erro ao buscar posts:', err);
            setError('Falha ao carregar artigos. Verifique sua conexão.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <main className="blog-page">
            <SEO 
                title="Blog | AceWeb - Dicas de SEO e Criação de Sites" 
                description="Acompanhe as melhores dicas sobre criação de sites, SEO, marketing digital e tecnologia no blog da AceWeb."
                canonical="/blog"
            />
            
            {/* Hero Section */}
            <section className="page-hero">
                <div className="page-hero__background">
                    <div className="page-hero__glow" />
                </div>
                <div className="container">
                    <motion.div
                        className="page-hero__content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="locations-badge">
                            <BookOpen size={14} />
                            Conteúdo Especializado
                        </span>
                        <h1>Nosso <span className="text-gradient">Blog</span></h1>
                        <p>
                            Dicas, tendências e estratégias para alavancar a sua presença digital, 
                            ranquear melhor no Google e converter mais clientes.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section blog-list-section">
                <div className="container">
                    {loading ? (
                        <div className="blog-loading-container">
                            <div className="admin-loading">Carregando artigos...</div>
                        </div>
                    ) : error ? (
                        <div className="blog-error">
                            <p>{error}</p>
                            <button onClick={fetchPosts} className="btn-retry">Tentar Novamente</button>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="blog-empty">
                            <p>Nenhum artigo publicado no momento. Volte em breve!</p>
                        </div>
                    ) : (
                        <div className="blog-grid">
                            {posts.map((post, index) => (
                                <motion.article 
                                    key={post.id} 
                                    className="blog-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link to={`/blog/${post.slug}`} className="blog-card__img-link">
                                        <div className="blog-card__img-wrapper">
                                            {post.thumbnail_url ? (
                                                <img src={post.thumbnail_url} alt={post.title} />
                                            ) : (
                                                <div className="blog-card__placeholder">
                                                    <BookOpen size={48} className="placeholder-icon" />
                                                </div>
                                            )}
                                            <div className="blog-card__img-overlay">
                                                <ArrowRight size={24} />
                                            </div>
                                        </div>
                                    </Link>
                                    
                                    <div className="blog-card__content">
                                        <div className="blog-card__meta">
                                            {post.created_at && (
                                                <span className="blog-card__date">
                                                    {format(new Date(post.created_at), "dd 'de' MMMM, yyyy", { locale: ptBR })}
                                                </span>
                                            )}
                                        </div>
                                        
                                        <Link to={`/blog/${post.slug}`}>
                                            <h2 className="blog-card__title">{post.title}</h2>
                                        </Link>
                                        
                                        <p className="blog-card__excerpt">
                                            {post.meta_description || "Clique para ler o artigo completo..."}
                                        </p>
                                        
                                        <div className="blog-card__footer">
                                            <div className="blog-card__tags">
                                                {post.tags && post.tags.slice(0, 2).map((tag, i) => (
                                                    <span key={i} className="blog-tag">#{tag}</span>
                                                ))}
                                            </div>
                                            <Link to={`/blog/${post.slug}`} className="blog-card__read-more">
                                                Ler mais
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Blog;
