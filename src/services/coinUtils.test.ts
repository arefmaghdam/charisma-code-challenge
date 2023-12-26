import { setSelectedSymbols } from '@/redux/slices/selectedSymbolsSlice';
import { isTokenEnabled, toggleToken } from './coinUtils';

describe('toggleToken function', () => {
  it('should toggle tokens correctly', () => {
    const mockToken = 'token1';
    const mockEnabledTokens = ['token1', 'token2'];
    const mockSetEnabledTokens = jest.fn();
    const mockDispatch = jest.fn();

    toggleToken(
      mockToken,
      mockEnabledTokens,
      mockSetEnabledTokens,
      mockDispatch
    );

    expect(mockSetEnabledTokens).toHaveBeenCalledWith(['token2']);
    expect(mockDispatch).toHaveBeenCalledWith(
      setSelectedSymbols(['token2'])
    );
  });
});

describe('isTokenEnabled function', () => {
  it('should return true for an enabled token', () => {
    const mockToken = 'token1';
    const mockEnabledTokens = ['token1', 'token2'];

    const result = isTokenEnabled(mockToken, mockEnabledTokens);

    expect(result).toBe(true);
  });

  it('should return false for a disabled token', () => {
    const mockToken = 'token3';
    const mockEnabledTokens = ['token1', 'token2'];

    const result = isTokenEnabled(mockToken, mockEnabledTokens);

    expect(result).toBe(false);
  });
});
