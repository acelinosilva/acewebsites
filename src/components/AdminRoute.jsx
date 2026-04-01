import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ADMIN_EMAIL = 'celticfolkmetal@gmail.com';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="app-loading">
                {/* Reusing global loading style from CSS */}
            </div>
        );
    }

    if (!user || user.email !== ADMIN_EMAIL) {
        // Redirecionar para login caso não autenticado, ou não autorizado
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

export default AdminRoute;
