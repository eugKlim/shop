import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { ROUTES } from '../../../config/routes';

interface Props {
  isInCart: (id: string) => boolean;
  handleAddToCart: (
    id: string,
    title: string,
    images: string,
    price: number,
    brand: string
  ) => void;
  id: string;
  title: string;
  images: string;
  price: number;
  brand: string;
}

const Buttons: React.FC<Props> = ({
  handleAddToCart,
  id,
  title,
  images,
  price,
  brand,
  isInCart,
}) => {
  return (
    <div className="mt-6 row-center space-x-3 text-white">
      {isInCart(String(id)) ? (
        <Link
          className="py-1 px-2 bg-linear-to-r from-emerald-800  to-green-900 rounded-2xl shadow-sm shadow-green-800 block w-20  hover:bg-linear-to-l"
          to={ROUTES.CART}
        >
          <RiShoppingBasketFill size={20} className="mx-auto" />
        </Link>
      ) : (
        <button
          className="py-1 px-2 bg-linear-to-r from-emerald-700  to-green-600 rounded-2xl shadow-sm shadow-green-700 row-center uppercase hover:bg-linear-to-l"
          onClick={() =>
            handleAddToCart(String(id), title, images, price, brand)
          }
        >
          <FaCartPlus className="mr-2" /> To cart
        </button>
      )}
      <Link
        to={ROUTES.HOME}
        className="py-1 px-4 bg-linear-to-r from-gray-700  to-gray-600 rounded-2xl block  row-center uppercase hover:bg-linear-to-l"
      >
        Home
      </Link>
    </div>
  );
};

export default Buttons;
