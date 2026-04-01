import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { collection, doc, getDoc, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../lib/firebase/config';
import { Save, Image as ImageIcon, ArrowLeft, Loader2 } from 'lucide-react';
import './PostEditor.css';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 720;

const PostEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = !!id;

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [tags, setTags] = useState('');
    const [published, setPublished] = useState(false);
    
    // Image Handling
    const [thumbnailStr, setThumbnailStr] = useState(null); // base64 preview/upload
    const [thumbnailUrl, setThumbnailUrl] = useState(''); // url from DB
    
    const [loading, setLoading] = useState(false);
    const [pageLoad, setPageLoad] = useState(isEditing);
    
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            fetchPost();
        }
    }, [id]);

    const fetchPost = async () => {
        try {
            const docRef = doc(db, 'posts', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setTitle(data.title || '');
                setSlug(data.slug || '');
                setContent(data.content || '');
                setMetaDescription(data.metaDescription || '');
                setTags(data.tags ? data.tags.join(', ') : '');
                setPublished(data.published || false);
                setThumbnailUrl(data.thumbnailUrl || '');
            } else {
                alert('Post não encontrado!');
                navigate('/admin/posts');
            }
        } catch (error) {
            console.error("Erro ao puxar dados:", error);
        } finally {
            setPageLoad(false);
        }
    };

    const handleTitleChange = (e) => {
        const val = e.target.value;
        setTitle(val);
        if (!isEditing) {
            // Auto generate slug
            const newSlug = val
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9 -]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-");
            setSlug(newSlug);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = TARGET_WIDTH;
                canvas.height = TARGET_HEIGHT;
                const ctx = canvas.getContext('2d');

                // Fill background (in case of transparency)
                ctx.fillStyle = '#000000';
                ctx.fillRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT);

                // Calculate Cover crop
                const scale = Math.max(TARGET_WIDTH / img.width, TARGET_HEIGHT / img.height);
                const x = (TARGET_WIDTH / scale - img.width) / 2;
                const y = (TARGET_HEIGHT / scale - img.height) / 2;

                ctx.drawImage(img, x * scale, y * scale, img.width * scale, img.height * scale);

                // get resized base64
                const resizedBase64 = canvas.toDataURL('image/jpeg', 0.85);
                setThumbnailStr(resizedBase64);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        
        if (!title || !slug || !content) {
            alert('Preencha título, slug e o conteúdo do post.');
            return;
        }

        if (!isEditing && !thumbnailStr) {
            alert('É obrigatório enviar uma imagem de destaque.');
            return;
        }

        setLoading(true);
        try {
            let uploadedUrl = thumbnailUrl;

            // Se o usuário fez upload de uma nova imagem
            if (thumbnailStr) {
                const storageRef = ref(storage, `blog_images/${slug}-${Date.now()}.jpg`);
                await uploadString(storageRef, thumbnailStr, 'data_url');
                uploadedUrl = await getDownloadURL(storageRef);
            }

            const postData = {
                title,
                slug,
                content,
                metaDescription,
                tags: tags.split(',').map(t => t.trim()).filter(t => t),
                published,
                thumbnailUrl: uploadedUrl,
                updatedAt: serverTimestamp(),
            };

            if (isEditing) {
                await updateDoc(doc(db, 'posts', id), postData);
                alert('Post atualizado com sucesso!');
            } else {
                postData.createdAt = serverTimestamp();
                await addDoc(collection(db, 'posts'), postData);
                alert('Post criado com sucesso!');
                navigate('/admin/posts');
            }
        } catch (error) {
            console.error('Erro ao salvar:', error);
            alert('Ocorreu um erro ao salvar o post.');
        } finally {
            setLoading(false);
        }
    };

    if (pageLoad) return <div className="admin-loading">Carregando editor...</div>;

    return (
        <div className="post-editor-page">
            <header className="admin-page-header">
                <div className="header-left">
                    <button onClick={() => navigate('/admin/posts')} className="btn-back">
                        <ArrowLeft size={20} />
                    </button>
                    <h1>{isEditing ? 'Editar Post' : 'Novo Post'}</h1>
                </div>
                <button onClick={handleSave} className="btn btn-primary" disabled={loading}>
                    {loading ? <Loader2 className="spinner" size={18} /> : <Save size={18} />}
                    {isEditing ? 'Atualizar' : 'Publicar'}
                </button>
            </header>

            <div className="editor-layout">
                {/* Main Content Area */}
                <div className="editor-main">
                    <div className="form-group">
                        <label>Título do Artigo</label>
                        <input 
                            type="text" 
                            className="form-input text-xl" 
                            value={title} 
                            onChange={handleTitleChange} 
                            placeholder="Ex: As Melhores Dicas de SEO"
                        />
                    </div>

                    <div className="form-group">
                        <label>Conteúdo</label>
                        <div className="quill-wrapper">
                            <ReactQuill 
                                theme="snow" 
                                value={content} 
                                onChange={setContent} 
                                modules={modules}
                                formats={formats}
                                placeholder="Escreva o conteúdo do post aqui..."
                            />
                        </div>
                    </div>
                </div>

                {/* Sidebar Details Area */}
                <div className="editor-sidebar">
                    <div className="form-settings-box">
                        <h3>Configurações de Publicação</h3>
                        
                        <div className="form-group switch-group">
                            <label>Status</label>
                            <select 
                                className="form-input" 
                                value={published ? 'true' : 'false'}
                                onChange={(e) => setPublished(e.target.value === 'true')}
                            >
                                <option value="true">Publicado</option>
                                <option value="false">Rascunho</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>URL Amigável (Slug)</label>
                            <input 
                                type="text" 
                                className="form-input" 
                                value={slug} 
                                onChange={(e) => setSlug(e.target.value)} 
                            />
                            <small>Ex: as-melhores-dicas-de-seo</small>
                        </div>
                    </div>

                    <div className="form-settings-box">
                        <h3>Imagem de Destaque</h3>
                        <small className="help-text">A imagem será cortada/redimensionada automaticamente para exatamente 1200x720 pixels para ótima performance e padrão SEO.</small>
                        
                        <div 
                            className="thumbnail-upload-area" 
                            onClick={() => fileInputRef.current?.click()}
                        >
                            {(thumbnailStr || thumbnailUrl) ? (
                                <img src={thumbnailStr || thumbnailUrl} alt="Preview" className="thumbnail-preview" />
                            ) : (
                                <div className="upload-placeholder">
                                    <ImageIcon size={32} />
                                    <span>Clique para Enviar</span>
                                </div>
                            )}
                        </div>
                        <input 
                            type="file" 
                            accept="image/*" 
                            ref={fileInputRef} 
                            style={{ display: 'none' }} 
                            onChange={handleImageUpload} 
                        />
                    </div>

                    <div className="form-settings-box">
                        <h3>SEO & Meta</h3>
                        
                        <div className="form-group">
                            <label>Meta Descrição</label>
                            <textarea 
                                className="form-input" 
                                rows="3"
                                value={metaDescription}
                                onChange={(e) => setMetaDescription(e.target.value)}
                                placeholder="Resumo atrativo para o snippet do Google (max 160 chars)"
                                maxLength={160}
                            />
                            <div className="char-count">{metaDescription.length}/160</div>
                        </div>

                        <div className="form-group">
                            <label>Palavras-Chave (Tags)</label>
                            <input 
                                type="text" 
                                className="form-input" 
                                value={tags} 
                                onChange={(e) => setTags(e.target.value)} 
                                placeholder="seo, dicas, desenvolvimento"
                            />
                            <small>Separe por vírgulas</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostEditor;
