import type { RootState } from '../../store';

import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from '../../store/slices/cartSlice';
import CartEmptyMessage from './message/CartEmptyMessage';
import CartResult from './Items/CartResult';
import CartProducts from './Items/CartProducts';
import ClearCartButton from './Items/ClearCartButton';
import { useAppSelector } from '../../hooks/redux';

export const Cart = () => {
  const { items, total } = useAppSelector((state: RootState) => state.cart);

  if (items.length === 0) {
    return <CartEmptyMessage />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Cart</h2>

        <ClearCartButton clearCart={clearCart} />
      </div>

      <CartProducts
        decrementQuantity={decrementQuantity}
        incrementQuantity={incrementQuantity}
        removeFromCart={removeFromCart}
        items={items}
      />

      <CartResult total={total} />
    </div>
  );
};
