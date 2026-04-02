import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Edit, Trash2, Plus, Eye, BookOpen } from 'lucide-react';
import './BlogAdmin.css';

const BlogAdmin = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const { data, error: fetchError } = await supabase
                .from('posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (fetchError) throw fetchError;

            setPosts(data || []);
        } catch (err) {
            console.error('Erro ao buscar posts:', err);
            setError(`Não foi possível conectar ao banco de dados: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir este post permanentemente?')) {
            try {
                const { error: deleteError } = await supabase
                    .from('posts')
                    .delete()
                    .eq('id', id);

                if (deleteError) throw deleteError;

                setPosts(posts.filter(post => post.id !== id));
            } catch (error) {
                console.error("Error deleting post:", error);
                alert("Erro ao excluir post.");
            }
        }
    };

    if (loading) {
        return (
            <div className="admin-loading-container">
                <div className="admin-loading">Carregando posts...</div>
                <p className="loading-help">Se demorar muito, verifique sua conexão ou recarregue a página.</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="admin-error-state">
                <h2>Ops! Algo deu errado</h2>
                <p>{error}</p>
                <button onClick={fetchPosts} className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                    Tentar Novamente
                </button>
            </div>
        );
    }

    return (
        <div className="admin-posts">
            <header className="admin-page-header">
                <h1>Gerenciar Posts</h1>
                <Link to="/admin/posts/new" className="btn btn-primary">
                    <Plus size={18} />
                    Novo Post
                </Link>
            </header>

            <div className="admin-posts__list">
                {posts.length === 0 ? (
                    <div className="admin-empty-state">
                        <p>Nenhum post encontrado. Cadastre o seu primeiro artigo!</p>
                    </div>
                ) : (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Status</th>
                                <th>Data Criação</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post.id}>
                                    <td className="admin-table__title">
                                        <div className="admin-table__img-wrapper">
                                            {post.thumbnailUrl ? (
                                                <img src={post.thumbnailUrl} alt={post.title} />
                                            ) : (
                                                <div className="admin-table__placeholder">
                                                    <BookOpen size={20} />
                                                </div>
                                            )}
                                        </div>
                                        <span>{post.title}</span>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${post.published ? 'published' : 'draft'}`}>
                                            {post.published ? 'Publicado' : 'Rascunho'}
                                        </span>
                                    </td>
                                    <td>
                                        {post.created_at ? format(new Date(post.created_at), "dd 'de' MMM, yyyy", { locale: ptBR }) : '-'}
                                    </td>
                                    <td className="admin-table__actions">
                                        <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="action-btn view" title="Ver no site">
                                            <Eye size={18} />
                                        </a>
                                        <Link to={`/admin/posts/edit/${post.id}`} className="action-btn edit" title="Editar">
                                            <Edit size={18} />
                                        </Link>
                                        <button onClick={() => handleDelete(post.id)} className="action-btn delete" title="Excluir">
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default BlogAdmin;
