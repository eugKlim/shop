import { BASE_API_URL } from '../../config/baseUrl';

interface OAuthButtonProps {
  provider: 'google';
  children: React.ReactNode;
  className?: string;
}

const OAuthButton = ({ provider, children, className }: OAuthButtonProps) => {
  const handleOAuth = () => {
    window.location.href = `${BASE_API_URL}/auth/${provider}`;
  };

  return (
    <button
      type="button"
      onClick={handleOAuth}
      className={`w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all dark:hover:bg-gray-700 ${
        className || ''
      }`}
    >
      {children}
    </button>
  );
};

export default OAuthButton;
