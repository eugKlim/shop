import React, { lazy } from 'react';
import { ROLES, type Role } from '../../config/roles';

import HomePage from '../../pages/HomePage';
import { ROUTES } from '../../config/routes';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';
import ResetPasswordPage from '../../pages/ResetPasswordPage';
import CartPage from '../../pages/CartPage';
import ProductPage from '../../pages/ProductPage';

const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));

const AdminPage = lazy(() => import('../../pages/AdminPage'));
const ManagerPage = lazy(() => import('../../pages/ManagerPage'));

const Forbidden = lazy(() => import('../../pages/ForbiddenPage'));
const NotFound = lazy(() => import('../../pages/NotFoundPage'));

export interface AppRoute {
  path: string;
  element: React.ReactElement;
  requiredRole?: Role[] | Role;
  onlyGuests?: boolean;
}

export const publicRoutes: AppRoute[] = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.DETAIL, element: <ProductPage /> },
  { path: ROUTES.LOGIN, element: <LoginPage />, onlyGuests: true },
  { path: ROUTES.REGISTER, element: <RegisterPage />, onlyGuests: true },
  {
    path: ROUTES.FORGOT_PASSWORD,
    element: <ForgotPasswordPage />,
    onlyGuests: true,
  },
  {
    path: ROUTES.RESET_PASSWORD,
    element: <ResetPasswordPage />,
    onlyGuests: true,
  },
];

export const privateRoutes: AppRoute[] = [
  {
    path: ROUTES.CART,
    element: <CartPage />,
    requiredRole: [ROLES.USER, ROLES.ADMIN, ROLES.MANAGER],
  },

  { path: ROUTES.ADMIN, element: <AdminPage />, requiredRole: ROLES.ADMIN },
  {
    path: ROUTES.MANAGER,
    element: <ManagerPage />,
    requiredRole: [ROLES.MANAGER, ROLES.ADMIN],
  },
];

export const systemRoutes: AppRoute[] = [
  { path: '/forbidden', element: <Forbidden /> },
  { path: '*', element: <NotFound /> },
];
