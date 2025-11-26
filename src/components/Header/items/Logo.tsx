import { ROUTES } from '../../../config/routes';
import { Link } from 'react-router-dom';
import { FaShopify } from 'react-icons/fa';

const Logo = () => {
  return (
    <div>
      <Link
        to={ROUTES.HOME}
        className="center text-2xl font-bold hover:text-amber-200"
      >
        <FaShopify color="yellow" />
        SHOP
      </Link>
    </div>
  );
};

export default Logo;
