import { configureStore, createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    filter: 'All',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = portfolioSlice.actions;

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice.reducer,
  },
});
