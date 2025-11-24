interface ServerErrorProps {
  error: unknown;
  defaultMessage: string;
}

const ServerError = ({ error, defaultMessage }: ServerErrorProps) => {
  if (!error || typeof error !== 'object' || !('data' in error)) {
    return null;
  }

  const errorMessage =
    typeof error.data === 'object' &&
    error.data !== null &&
    'message' in error.data
      ? (error.data.message as string)
      : defaultMessage;

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <p className="text-sm text-red-600">{errorMessage}</p>
    </div>
  );
};

export default ServerError;
