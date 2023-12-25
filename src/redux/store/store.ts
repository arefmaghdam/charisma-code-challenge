import { configureStore } from '@reduxjs/toolkit';
import selectedSymbolsReducer from '../slices/selectedSymbolsSlice';

const store = configureStore({
  reducer: {
    selectedSymboles: selectedSymbolsReducer
  }
});

export default store;
