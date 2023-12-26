import React from 'react';
import { ToggleSwitch } from './index.styles';

interface ToggleButtonProps {
  result: string;
  toggleToken: (token: string) => void;
  isTokenEnabled: (token: string) => boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  result,
  toggleToken,
  isTokenEnabled
}: ToggleButtonProps) => {
  return (
    <>
      <ToggleSwitch>
        <input
          type="checkbox"
          onChange={() => toggleToken(result)}
          checked={isTokenEnabled(result)}
        />
        <span />
      </ToggleSwitch>
    </>
  );
};

export default ToggleButton;
