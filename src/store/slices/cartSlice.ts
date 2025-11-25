import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  brand: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

const loadCartFromStorage = (): CartItem[] => {
  try {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error('Error loading cart: ', error);
    return [];
  }
};

const saveCartToStorage = (items: CartItem[]) => {
  try {
    localStorage.setItem('cart', JSON.stringify(items));
  } catch (error) {
    console.error('Error saving cart: ', error);
  }
};

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const initialState: CartState = {
  items: loadCartFromStorage(),
  total: 0,
};

initialState.total = calculateTotal(initialState.items);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.total = calculateTotal(state.items);
      saveCartToStorage(state.items);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.id !== String(action.payload)
      );
      state.total = calculateTotal(state.items);
      saveCartToStorage(state.items);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find(
        (item) => item.id === String(action.payload.id)
      );

      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
        state.total = calculateTotal(state.items);
        saveCartToStorage(state.items);
      }
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.id === String(action.payload)
      );

      if (item) {
        item.quantity += 1;
        state.total = calculateTotal(state.items);
        saveCartToStorage(state.items);
      }
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(
        (item) => item.id === String(action.payload)
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.total = calculateTotal(state.items);
        saveCartToStorage(state.items);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      saveCartToStorage([]);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
