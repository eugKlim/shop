import { Link } from 'react-router-dom';

interface AuthFormLinkProps {
  text: string;
  linkText: string;
  to: string;
}

const AuthFormLink = ({ text, linkText, to }: AuthFormLinkProps) => {
  return (
    <div className="mt-6 text-center">
      <p className="text-sm text-gray-600">
        {text}{' '}
        <Link
          to={to}
          className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default AuthFormLink;
