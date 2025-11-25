import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  type CartItem,
} from '../store/slices/cartSlice';

export const useCart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: RootState) => state.cart);

  const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalItems = items.length;

  const isInCart = (productId: string) => {
    return items.some((item) => item.id === productId);
  };

  const getItemQuantity = (productId: string) => {
    return items.find((item) => item.id === productId)?.quantity || 0;
  };

  return {
    items,
    total,
    totalItems,
    itemsCount,
    isInCart,
    getItemQuantity,
    addToCart: (item: Omit<CartItem, 'quantity'>) => dispatch(addToCart(item)),
    removeFromCart: (id: number) => dispatch(removeFromCart(String(id))),
    updateQuantity: (id: number, quantity: number) =>
      dispatch(updateQuantity({ id, quantity })),
    incrementQuantity: (id: number) => dispatch(incrementQuantity(String(id))),
    decrementQuantity: (id: number) => dispatch(decrementQuantity(String(id))),
    clearCart: () => dispatch(clearCart()),
  };
};
