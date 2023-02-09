import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  list: null,
  isError: false,
};
export const TRENDING_CRYPTO = createAsyncThunk('TRENDING_CRYPTO', async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
  return response.json();
});
const trendingSlice = createSlice({
  name: 'trendingcryptos',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(TRENDING_CRYPTO.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(TRENDING_CRYPTO.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(TRENDING_CRYPTO.rejected, (state) => {
      state.isError = true;
    });
  },
});
export default trendingSlice.reducer;
