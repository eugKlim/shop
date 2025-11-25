import { useAppDispatch } from '../../../hooks/redux';
import type { Action } from '@reduxjs/toolkit';
import { FaRegTrashCan } from 'react-icons/fa6';
interface Props {
  clearCart: () => Action;
}

const ClearCartButton: React.FC<Props> = ({ clearCart }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(clearCart())}
      className="px-4 py-2 bg-red-500 row-center text-white rounded hover:bg-red-600 transition"
    >
      Clear cart <FaRegTrashCan className="ml-2" />
    </button>
  );
};

export default ClearCartButton;
