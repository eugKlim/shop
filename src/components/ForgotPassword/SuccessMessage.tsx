import { Link } from 'react-router-dom';
import AuthFormContainer from '../UI/AuthFormContainer';
import { ROUTES } from '../../config/routes';

const SuccessMessage = () => {
  return (
    <AuthFormContainer title="Check your email">
      <div className="text-center space-y-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-600">
            Your password has been successfully changed. You can now log in with
            your new password. Redirecting to the login page...
          </p>
        </div>
        <Link
          to={ROUTES.LOGIN}
          className="inline-block text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
        >
          Return to the entrance
        </Link>
      </div>
    </AuthFormContainer>
  );
};

export default SuccessMessage;
