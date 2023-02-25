import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
  
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const findItem = state.items.find((obj) => obj.id  === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }
      state.totalPrice = state.items.reduce((acc, obj) => (obj.count * obj.price) + acc , 0);
    },
    minusItem(state, action) {
    const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count > 0? findItem.count-- : findItem.count = 0
      }
    },
    removeAllItem(state,action) {
      state.items = [];
      
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addProduct, removeAllItem, removeItem , minusItem} = cartSlice.actions;
export default cartSlice.reducer;
