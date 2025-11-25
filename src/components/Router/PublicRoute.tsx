import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

interface Props {
  children: JSX.Element;
}

export const PublicRoute = ({ children }: Props) => {
  const user = useAppSelector((s) => s.auth.user);

  if (user) return <Navigate to="/" replace />;

  return children;
};
