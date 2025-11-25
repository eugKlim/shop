import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes, systemRoutes } from './config';
import ProtectedRoute from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {publicRoutes.map(({ path, element, onlyGuests }) => (
            <Route
              key={path}
              path={path}
              element={
                onlyGuests ? <PublicRoute>{element}</PublicRoute> : element
              }
            />
          ))}

          {privateRoutes.map(({ path, element, requiredRole }) => (
            <Route
              key={path}
              element={
                <ProtectedRoute
                  requiredRole={requiredRole!}
                  redirectTo="/forbidden"
                />
              }
            >
              <Route path={path} element={element} />
            </Route>
          ))}

          {systemRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
