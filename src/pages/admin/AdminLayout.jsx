import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase/config';
import { LayoutDashboard, FileText, LogOut, Home, PenTool } from 'lucide-react';
import './AdminLayout.css';

const AdminLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/admin/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const navItems = [
        { path: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/posts', icon: FileText, label: 'Posts' },
        { path: '/admin/posts/new', icon: PenTool, label: 'Novo Post' },
    ];

    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <div className="admin-sidebar__header">
                    <h2>AceWeb <span>Admin</span></h2>
                </div>

                <nav className="admin-nav">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`admin-nav__item ${isActive ? 'active' : ''}`}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="admin-sidebar__footer">
                    <Link to="/" className="admin-nav__item">
                        <Home size={20} />
                        <span>Ver Site</span>
                    </Link>
                    <button onClick={handleLogout} className="admin-nav__item logout-btn">
                        <LogOut size={20} />
                        <span>Sair</span>
                    </button>
                </div>
            </aside>

            <main className="admin-main">
                <div className="admin-main__content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
