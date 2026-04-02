import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase/config';
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
        console.log('--- Iniciando busca de posts públicos ---');
        console.log('Projeto:', 'aceweb-36eb2');
        
        const timeoutPromise = (ms) => new Promise((_, reject) => 
            setTimeout(() => reject(new Error('timeout')), ms)
        );

        try {
            console.log('1. Tentando busca filtrada e ordenada...');
            const q1 = query(
                collection(db, 'posts'), 
                where('published', '==', true),
                orderBy('createdAt', 'desc')
            );
            
            try {
                const querySnapshot = await Promise.race([
                    getDocs(q1),
                    timeoutPromise(10000)
                ]);
                
                const postsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPosts(postsData);
                console.log('Busca pública normal concluída!');
            } catch (firstErr) {
                console.warn('Busca filtrada falhou. Tentando busca total sem Filtros/Ordem...');
                
                const q2 = query(collection(db, 'posts'));
                const querySnapshot2 = await Promise.race([
                    getDocs(q2),
                    timeoutPromise(10000)
                ]);
                
                let postsData = querySnapshot2.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                
                // Manual filter and sort for fallback
                postsData = postsData
                    .filter(p => p.published === true)
                    .sort((a, b) => (b.createdAt?.toDate() || 0) - (a.createdAt?.toDate() || 0));
                
                setPosts(postsData);
                console.log('Busca de emergência (Blog) concluída!');
            }
        } catch (err) {
            console.error('--- ERRO CRÍTICO NO BLOG ---');
            console.error('Projeto ID:', 'aceweb-36eb2');
            setError('Falha de conexão com o banco de dados. Verifique o console para detalhes.');
        } finally {
            setLoading(false);
            console.log('--- Fim da busca de posts públicos ---');
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
                                            {post.thumbnailUrl ? (
                                                <img src={post.thumbnailUrl} alt={post.title} />
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
                                            {post.createdAt && (
                                                <span className="blog-card__date">
                                                    {format(post.createdAt.toDate(), "dd 'de' MMMM, yyyy", { locale: ptBR })}
                                                </span>
                                            )}
                                        </div>
                                        
                                        <Link to={`/blog/${post.slug}`}>
                                            <h2 className="blog-card__title">{post.title}</h2>
                                        </Link>
                                        
                                        <p className="blog-card__excerpt">
                                            {post.metaDescription || "Clique para ler o artigo completo..."}
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
