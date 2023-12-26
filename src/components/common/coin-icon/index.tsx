import React from 'react';
import { StyledIcon } from './indx.styles';

interface CoinIconProps {
  message: string;
}

const CoinIcon: React.FC<CoinIconProps> = ({ message }) => {
  return (
    <>
      <StyledIcon>
        <p>{message}</p>
      </StyledIcon>
    </>
  );
};

export default CoinIcon;
