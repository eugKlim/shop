interface AuthFormContainerProps {
  title: string;
  children: React.ReactNode;
}

const AuthFormContainer = ({ title, children }: AuthFormContainerProps) => {
  return (
    <div className="container">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthFormContainer;
