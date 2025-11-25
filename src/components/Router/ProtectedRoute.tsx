import { useAppSelector } from '../../hooks/redux';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../../config/routes';

const ProtectedRoute = ({
  requiredRole,
  redirectTo = '/',
}: {
  requiredRole?: string | string[];
  redirectTo?: string;
}) => {
  const { isAuthenticated, user } = useAppSelector((s) => s.auth);

  if (!isAuthenticated) return <Navigate to={ROUTES.LOGIN} replace />;
  if (requiredRole) {
    const rolesArray = Array.isArray(requiredRole)
      ? requiredRole
      : [requiredRole];

    const userHasAccess = rolesArray.includes(user?.role!);

    if (!userHasAccess) return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
