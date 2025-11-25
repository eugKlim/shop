import { useAppDispatch } from '../../../hooks/redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CartItem } from '../../../store/slices/cartSlice';

interface Props {
  decrementQuantity: (id: string) => PayloadAction<string>;
  incrementQuantity: (id: string) => PayloadAction<string>;
  removeFromCart: (id: string) => PayloadAction<string>;
  items: CartItem[];
}

const CartProducts = ({
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  items,
}: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
          )}

          <div className="flex-1">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.price} $</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch(decrementQuantity(String(item.id)))}
              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition"
            >
              -
            </button>
            <span className="w-8 text-center font-semibold">
              {item.quantity}
            </span>
            <button
              onClick={() => dispatch(incrementQuantity(String(item.id)))}
              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition"
            >
              +
            </button>
          </div>

          <div className="text-lg font-bold min-w-[100px] text-right">
            {(item.price * item.quantity).toFixed(2)} $
          </div>

          <button
            onClick={() => dispatch(removeFromCart(String(item.id)))}
            className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
