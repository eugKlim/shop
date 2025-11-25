import { ROUTES } from '../../../config/routes';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { CgDetailsMore } from 'react-icons/cg';
import { RiShoppingBasketFill } from 'react-icons/ri';

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
  isInCart,
  handleAddToCart,
  id,
  title,
  images,
  price,
  brand,
}) => {
  return (
    <div className="text-white grid grid-cols-2 items-start p-1 space-x-1 text-sm font-semibold">
      {isInCart(id) ? (
        <Link
          className="py-1 px-2 bg-linear-to-r from-emerald-800  to-green-900 rounded-2xl shadow-sm shadow-green-800  hover:bg-linear-to-l"
          to={ROUTES.CART}
        >
          <RiShoppingBasketFill size={20} className="mx-auto" />
        </Link>
      ) : (
        <button
          className="py-1 px-2 bg-linear-to-r from-emerald-700  to-green-600 rounded-2xl shadow-sm shadow-green-700 row-center uppercase hover:bg-linear-to-l"
          onClick={() => handleAddToCart(id, title, images, price, brand)}
        >
          <FaCartPlus className="mr-2" /> To cart
        </button>
      )}

      <button className="py-1 px-2 bg-pink-800 rounded-2xl row-center uppercase  shadow-sm shadow-pink-500 hover:bg-pink-700">
        <CgDetailsMore className="mr-2" />
        Details
      </button>
    </div>
  );
};

export default Buttons;
