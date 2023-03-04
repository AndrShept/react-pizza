import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICartSliceState {
  totalPrice: number;
  items: TCartItems[];
}
export type TCartItems = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  price: number;
  size: number;
  count: number;
};

const initialState:ICartSliceState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action:PayloadAction<TCartItems>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce(
        (acc, obj) => obj.count * obj.price + acc,
        0
      );
    },
    minusItem(state, action:PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count > 0 ? findItem.count-- : (findItem.count = 0);
      }
    },
    clearItem(state, action) {
      state.items = [];
    },
    removeItem(state, action:PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addProduct, clearItem, removeItem, minusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
