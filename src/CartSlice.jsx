import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(x => x.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          name: action.payload.name,
          cost: parseInt(action.payload.cost.substring(1)),
          image: action.payload.image,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(x => x.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;
      const existingItem = state.items.find(x => x.name === name);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
