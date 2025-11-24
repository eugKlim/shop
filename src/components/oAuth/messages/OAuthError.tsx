import AuthFormContainer from '../../UI/AuthFormContainer';

const OAuthError = () => {
  return (
    <AuthFormContainer title="Authorization error">
      <div className="text-center space-y-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-600">
            Unable to sign in with Google. Try again or sign in with your email
            and password.
          </p>
        </div>
        <p className="text-sm text-gray-600">Redirecting to login page...</p>
      </div>
    </AuthFormContainer>
  );
};

export default OAuthError;
