import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { search, categId, selectSort, sortAscDesc } = params;
    const { data } = await axios.get(
      `https://63ef5425c59531ccf16d0584.mockapi.io/items?${search}${categId}${selectSort}${sortAscDesc}`
    );

    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
  isLoading: null
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading...';
      state.items = []
      state.isLoading = true
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
      state.isLoading = false
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'ERROR';
      state.items = [];
    },

  },
});

export const { setItems,setIsLoading } = pizzaSlice.actions;
export default pizzaSlice.reducer;
