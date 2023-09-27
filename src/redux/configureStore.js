import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoList';
import trendingReducer from './TopTrendingCoin';

const store = configureStore({
  reducer: {
    cryptolist: cryptoReducer,
    trendingcryptos: trendingReducer,

  },
});
export default store;
