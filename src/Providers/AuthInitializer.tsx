import { useEffect } from 'react';
import { useLazyGetCurrentUserQuery } from '../services/authApi';
import { setLoading } from '../store/slices/authSlice';
import { useAppDispatch } from '../hooks/redux';

export const AuthInitializer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const [getCurrentUser] = useLazyGetCurrentUserQuery();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await getCurrentUser().unwrap();
      } catch (error) {
        console.error('ERROR: ', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    initializeAuth();
  }, []);

  return <>{children}</>;
};
