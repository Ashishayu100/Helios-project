import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx'; // Adjust the path accordingly

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
