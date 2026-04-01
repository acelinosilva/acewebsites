import { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase/config';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Edit, Trash2, Plus, Eye } from 'lucide-react';
import './BlogAdmin.css';

const BlogAdmin = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const postsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(postsData);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir este post permanentemente?')) {
            try {
                await deleteDoc(doc(db, 'posts', id));
                setPosts(posts.filter(post => post.id !== id));
            } catch (error) {
                console.error("Error deleting post:", error);
                alert("Erro ao excluir post.");
            }
        }
    };

    if (loading) {
        return <div className="admin-loading">Carregando posts...</div>;
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
                                            {post.thumbnailUrl && <img src={post.thumbnailUrl} alt={post.title} />}
                                        </div>
                                        <span>{post.title}</span>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${post.published ? 'published' : 'draft'}`}>
                                            {post.published ? 'Publicado' : 'Rascunho'}
                                        </span>
                                    </td>
                                    <td>
                                        {post.createdAt ? format(post.createdAt.toDate(), "dd 'de' MMM, yyyy", { locale: ptBR }) : '-'}
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
