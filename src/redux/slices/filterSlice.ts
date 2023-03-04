import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type TSort = {
  name: string;
  sortProperty: string;
};

interface IFilterSliceState {
  categoryId: number;
  sort: TSort;
}

const initialState: IFilterSliceState = {
  categoryId: 0,
  sort: {
    name: 'популярні',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action:PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortId(state, action:PayloadAction<TSort>) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSortId } = filterSlice.actions;
export default filterSlice.reducer;
