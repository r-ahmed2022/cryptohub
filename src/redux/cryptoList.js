import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  list: null,
  isError: false,
};
export const LIST_CRYPTO = createAsyncThunk('LIST_CRYPTO', async (currency) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
  return response.json();
});
const counterSlice = createSlice({
  name: 'cryptolist',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(LIST_CRYPTO.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LIST_CRYPTO.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(LIST_CRYPTO.rejected, (state) => {
      state.isError = true;
    });
  },
});
export default counterSlice.reducer;
