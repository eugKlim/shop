import { memo, useCallback, useMemo } from 'react';
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
  const handleClick = useCallback(() => {
    handleAddToCart(id, title, images, price, brand);
  }, [handleAddToCart, id, title, images, price, brand]);

  const detailLink = useMemo(() => ROUTES.DETAIL.replace(':id', id), [id]);
  const inCart = useMemo(() => isInCart(id), [isInCart, id]);

  return (
    <div className="text-white grid grid-cols-2 items-start p-1 space-x-1 text-sm font-semibold">
      {inCart ? (
        <Link
          className="py-1 px-2 bg-linear-to-r from-emerald-800  to-green-900 rounded-2xl shadow-sm shadow-green-800  hover:bg-linear-to-l"
          to={ROUTES.CART}
        >
          <RiShoppingBasketFill size={20} className="mx-auto" />
        </Link>
      ) : (
        <button
          className="py-1 px-2 bg-linear-to-r from-emerald-700  to-green-600 rounded-2xl shadow-sm shadow-green-700 row-center uppercase hover:bg-linear-to-l"
          onClick={handleClick}
        >
          <FaCartPlus className="mr-2" /> To cart
        </button>
      )}

      <Link
        className="py-1 px-2 bg-pink-800 rounded-2xl row-center uppercase  shadow-sm shadow-pink-500 hover:bg-pink-700"
        to={detailLink}
      >
        <CgDetailsMore className="mr-2" />
        Details
      </Link>
    </div>
  );
};

export default memo(Buttons);
