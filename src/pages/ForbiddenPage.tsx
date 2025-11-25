import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';

const ForbiddenPage = () => {
  return (
    <div className="pt-10 text-center">
      <h2 className="text-red-500 font-bold mb-8">Forbidden this page</h2>
      <Link
        to={ROUTES.HOME}
        className="py-2 px-10 bg-gray-500 rounded-2xl text-white uppercase hover:bg-gray-600"
      >
        Go to home
      </Link>
    </div>
  );
};

export default ForbiddenPage;
