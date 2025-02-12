import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const user = JSON.parse(sessionStorage.getItem('user')); // Check if user exists
  
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
