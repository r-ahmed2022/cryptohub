import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoList';

const store = configureStore({
  reducer: {
    cryptolist: cryptoReducer,
   
  },
});
export default store;
