import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToggleButton from '../toggle-switch/indx';
import { isTokenEnabled, toggleToken } from '@/services/coinUtils';
import { FlexboxContainer, ItemGrow1, ItemGrow2, StyledLi } from './index.styles';
import ListItemSeparator from '../list-item-separator';
import CoinIcon from '../coin-icon';
// import { networks, payments } from 'bitcoinjs-lib';
// import ECPairFactory from 'ecpair';

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
  // const privateKey = '04123456789abcdef0123456789abcdef0123456789abcdef0123456789';
  const privateKey = Buffer.from(
    '04123456789abcdef0123456789abcdef0123456789abcdef0123456789',
    'hex'
  );
  // const generatedAddress = address(privateKey);
  // const keyPair = ECPairFactory(privateKey);
  // const { address } = payments.p2pkh({ pubkey: keyPair.publicKey, network: networks.bitcoin });

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
            <ItemGrow1>
              <CoinIcon message={result} />
            </ItemGrow1>
            <ItemGrow1>{result}</ItemGrow1>
            <ItemGrow2>
              {showToggleButton && (
                <ToggleButton
                  result={result}
                  toggleToken={handleToggleToken}
                  isTokenEnabled={handleIsTokenEnabled}
                />
              )}
              {result === 'BTC' && !showToggleButton && (
                <p>1askjks\jdhliahdakjsaljkfvbkj;lkb,jkjnljvkjhkjk</p>
              )}
            </ItemGrow2>
          </FlexboxContainer>
          <ListItemSeparator />
        </StyledLi>
      ))}
    </>
  );
};

export default CoinComponent;
