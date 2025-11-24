import OAuthButton from './OAuthButton';
import googleIcon from '../../assets/google.svg';

const OAuthComponent = () => {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      <div className="mt-6">
        <OAuthButton provider="google">
          <img src={googleIcon} alt="google icon" className="w-5" />
          Sign in with Google
        </OAuthButton>
      </div>
    </div>
  );
};

export default OAuthComponent;
