import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Lock, Mail, ShieldAlert } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import SEO from '../../components/SEO';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();
    const { user } = useAuth();
    const ADMIN_EMAIL = 'celticfolkmetal@gmail.com';

    useEffect(() => {
        if (user && user.email === ADMIN_EMAIL) {
            navigate('/admin', { replace: true });
        }
    }, [user, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (email !== ADMIN_EMAIL) {
            setError('Acesso negado: Este e-mail não possui privilégios de administrador.');
            setLoading(false);
            return;
        }

        try {
            const { error: authError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (authError) throw authError;

            navigate('/admin', { replace: true });
        } catch (err) {
            setLoading(false);
            setError(`Falha no login: ${err.message || 'verifique suas credenciais.'}`);
            console.error(err);
        }
    };

    return (
        <main className="admin-login-page">
            <SEO title="Painel Admin | Login" />
            <div className="login__container">
                <div className="login__box">
                    <div className="login__header">
                        <div className="login__icon">
                            <Lock size={32} />
                        </div>
                        <h1>Acesso Restrito</h1>
                        <p>Painel Administrativo AceWeb Blog</p>
                    </div>

                    {error && (
                        <div className="login__error">
                            <ShieldAlert size={18} />
                            <span>{error}</span>
                        </div>
                    )}

                    <form className="login__form" onSubmit={handleLogin}>
                        <div className="login__input-group">
                            <label>E-mail Autorizado</label>
                            <div className="login__input-wrapper">
                                <Mail size={20} className="input-icon" />
                                <input
                                    type="email"
                                    placeholder="celticfolkmetal@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="login__input-group">
                            <label>Senha</label>
                            <div className="login__input-wrapper">
                                <Lock size={20} className="input-icon" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary login__btn"
                            disabled={loading}
                        >
                            {loading ? 'Autenticando...' : 'Entrar no Sistema'}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
