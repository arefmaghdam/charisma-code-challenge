import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToggleButton from '../toggle-switch/indx';
import { isTokenEnabled, toggleToken } from '@/services/coinUtils';
import { FlexboxContainer, StyledLi } from './index.styles';

interface CoinComponentProps {
  searchResults: string[];
  showToggleButton?: boolean;
}

const CoinComponent: React.FC<CoinComponentProps> = ({
  searchResults,
  showToggleButton = true
}: CoinComponentProps) => {
  const dispatch = useDispatch();
  const selectedSymbols = useSelector(
    (state: { selectedSymboles: { value: string[] } }) => state.selectedSymboles.value
  );
  const [enabledTokens, setEnabledTokens] = useState<string[]>(selectedSymbols);

  useEffect(() => {
    if (enabledTokens.length === 0) return;
    console.log(enabledTokens);
  }, [enabledTokens]);

  const handleToggleToken = (token: string) => {
    toggleToken(token, enabledTokens, setEnabledTokens, dispatch);
  };

  const handleIsTokenEnabled = (token: string) => {
    return isTokenEnabled(token, enabledTokens);
  };

  return (
    <>
      {searchResults.map((result: string, index: number) => (
        <StyledLi key={index}>
          <FlexboxContainer>
            <div>{result}</div>
            {showToggleButton && (
              <ToggleButton
                result={result}
                toggleToken={handleToggleToken}
                isTokenEnabled={handleIsTokenEnabled}
              />
            )}
          </FlexboxContainer>
        </StyledLi>
      ))}
    </>
  );
};

export default CoinComponent;
