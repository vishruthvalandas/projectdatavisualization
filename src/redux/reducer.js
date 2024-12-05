// src/redux/slices/chartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    clickedIndex: null, // Store the index of the clicked segment
  },
  reducers: {
    setClickedIndex: (state, action) => {
      state.clickedIndex = action.payload;
    },
  },
});

export const { setClickedIndex } = chartSlice.actions;

export default chartSlice.reducer;
