import type { ButtonHTMLAttributes } from 'react';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  loadingText: string;
  children: React.ReactNode;
}

const SubmitButton = ({
  isLoading,
  loadingText,
  children,
  className,
  ...props
}: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`w-full bg-linear-to-r from-cyan-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md ${
        className || ''
      }`}
      {...props}
    >
      {isLoading ? loadingText : children}
    </button>
  );
};

export default SubmitButton;
