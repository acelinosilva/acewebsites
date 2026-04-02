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
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setLoading(true);
        setError(null);
        console.log('--- Iniciando busca de posts ---');
        console.log('Projeto:', 'aceweb-36eb2');
        
        const timeoutPromise = (ms) => new Promise((_, reject) => 
            setTimeout(() => reject(new Error('timeout')), ms)
        );

        try {
            console.log('1. Tentando busca ordenada (orderBy: createdAt desc)...');
            const q1 = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
            
            try {
                const querySnapshot = await Promise.race([
                    getDocs(q1),
                    timeoutPromise(10000) // 10s para a primeira tentativa
                ]);
                
                const postsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPosts(postsData);
                console.log('Busca ordenada concluída com sucesso!');
            } catch (firstErr) {
                console.warn('Busca ordenada falhou ou deu timeout. Tentando busca sem ordenação...');
                console.log('Motivo da falha:', firstErr.message || firstErr.code);
                
                // Fallback: Busca sem nenhuma ordenação/filtro
                const q2 = query(collection(db, 'posts'));
                const querySnapshot2 = await Promise.race([
                    getDocs(q2),
                    timeoutPromise(10000)
                ]);
                
                const postsData = querySnapshot2.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                
                // Sort locally if we have data
                if (postsData.length > 0) {
                    postsData.sort((a, b) => {
                        const dateA = a.createdAt?.toDate() || 0;
                        const dateB = b.createdAt?.toDate() || 0;
                        return dateB - dateA;
                    });
                }
                
                setPosts(postsData);
                console.log('Busca sem ordenação concluída com sucesso (fallback ativo).');
                alert('Aviso: Os filtros do banco de dados estão lentos. Usando carregamento de emergência.');
            }
        } catch (err) {
            console.error('--- FALHA CRÍTICA NA BUSCA ---');
            console.error('Projeto ID:', 'aceweb-36eb2');
            console.error('Detalhe:', err);

            let friendlyMessage = 'Não foi possível conectar ao banco de dados.';
            if (err.message === 'timeout') {
                friendlyMessage = 'Tempo esgotado. Verifique se o Cloud Firestore está ativado no console do Firebase e se as Regras de Segurança permitem leitura.';
            } else if (err.code === 'permission-denied') {
                friendlyMessage = 'Acesso Negado: Verifique as Regras de Segurança no Console do Firebase.';
            }
            
            setError(`${friendlyMessage} (ID: aceweb-36eb2)`);
        } finally {
            setLoading(false);
            console.log('--- Fim da busca de posts ---');
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
