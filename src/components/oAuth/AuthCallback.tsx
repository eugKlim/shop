import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLazyGetCurrentUserQuery } from '../../services/authApi';
import { ROUTES } from '../../config/routes';
import AuthFormContainer from '../UI/AuthFormContainer';
import OAuthError from './messages/OAuthError';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [getCurrentUser, { isLoading }] = useLazyGetCurrentUserQuery();

  const success = searchParams.get('success');
  const error = searchParams.get('error');

  useEffect(() => {
    const handleCallback = async () => {
      if (error === 'oauth_failed') {
        setTimeout(() => {
          navigate(ROUTES.LOGIN);
        }, 3000);
        return;
      }

      if (success === 'true') {
        try {
          await getCurrentUser().unwrap();
          navigate(ROUTES.HOME);
        } catch (err) {
          console.error('Error retrieving user data: ', err);
          setTimeout(() => {
            navigate(ROUTES.LOGIN);
          }, 3000);
        }
      } else {
        navigate(ROUTES.LOGIN);
      }
    };

    handleCallback();
  }, [success, error, navigate, getCurrentUser]);

  if (error === 'oauth_failed') {
    return <OAuthError />;
  }

  return (
    <AuthFormContainer title="Authorization">
      <div className="text-center">
        <p className="text-gray-600">
          {isLoading ? 'Authorization completed...' : 'Redirection...'}
        </p>
      </div>
    </AuthFormContainer>
  );
};

export default AuthCallback;
