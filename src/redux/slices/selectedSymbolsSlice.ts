import { createSlice } from '@reduxjs/toolkit';

export interface symbols {
  value: string[];
}

const selectedSymbolsInitialState: symbols = {
  value: []
};

const selectedSymbolSlice = createSlice({
  name: 'selectedSymbols',
  initialState: selectedSymbolsInitialState,
  reducers: {
    setSelectedSymbols(state, action) {
      console.log(action.payload);
      return {
        ...state,
        value: action.payload
      };
    }
  }
});

export const { setSelectedSymbols } = selectedSymbolSlice.actions;
export default selectedSymbolSlice.reducer;
