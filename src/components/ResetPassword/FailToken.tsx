import AuthFormContainer from '../UI/AuthFormContainer';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/routes';

const FailToken = () => {
  return (
    <AuthFormContainer title="Ошибка">
      <div className="text-center space-y-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-600">
            Invalid or expired token. Request password recovery again.
          </p>
        </div>
        <Link
          to={ROUTES.FORGOT_PASSWORD}
          className="inline-block text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
        >
          Request password recovery
        </Link>
      </div>
    </AuthFormContainer>
  );
};

export default FailToken;
