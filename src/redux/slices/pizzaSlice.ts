
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

 

export const fetchPizzas = createAsyncThunk<TPizzaItems[],Record<string,string> >(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { search, categId, selectSort, sortAscDesc } = params;
    const { data } = await axios.get<TPizzaItems[]>(
      `https://63ef5425c59531ccf16d0584.mockapi.io/items?${search}${categId}${selectSort}${sortAscDesc}`
    );

    return data;
  }
);
type TPizzaItems = {
  category: number;
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string;
  types: number[];
};
enum EStatus {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

interface IPizzaSliceState {
  items: TPizzaItems[];
  status: EStatus;
  isLoading: boolean;
}

const initialState:IPizzaSliceState = {
  items: [],
  status: EStatus.LOADING,
  isLoading: false,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action:PayloadAction<TPizzaItems[]>) {
      state.items = action.payload;
    },
    setIsLoading(state, action:PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },


  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = EStatus.LOADING;
      state.items = [];
      state.isLoading = true;
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = EStatus.SUCCESS;
      state.items = action.payload;
      state.isLoading = false;
    })
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = EStatus.ERROR;
      state.items = [];
    })
  },
})
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = 'loading...';
  //     state.items = [];
  //     state.isLoading = true;
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.status = 'success';
  //     state.items = action.payload;
  //     state.isLoading = false;
  //   },
  //   [fetchPizzas.rejected]: (state) => {
  //     state.status = 'ERROR';
  //     state.items = [];
  //   },
  // },


export const { setItems, setIsLoading } = pizzaSlice.actions;
export default pizzaSlice.reducer;
