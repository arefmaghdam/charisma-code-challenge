import { setSelectedSymbols } from '@/redux/slices/selectedSymbolsSlice';

export const toggleToken = (
  token: string,
  enabledTokens: string[],
  setEnabledTokens: React.Dispatch<React.SetStateAction<string[]>>,
  dispatch: Function
) => {
  if (enabledTokens.includes(token)) {
    const updatedTokens = enabledTokens.filter((item) => item !== token);
    setEnabledTokens(updatedTokens);
    dispatch(setSelectedSymbols(updatedTokens));
  } else {
    const updatedTokens = [...enabledTokens, token];
    setEnabledTokens(updatedTokens);
    dispatch(setSelectedSymbols(updatedTokens));
  }
};

export const isTokenEnabled = (token: string, enabledTokens: string[]) => {
  return enabledTokens.includes(token);
};
