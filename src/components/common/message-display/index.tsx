import React from 'react';
import { StyledMess } from './index.styles';

interface MessageDisplayProps {
  message: string;
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ message }) => {
  return <StyledMess>{message}</StyledMess>;
};

export default MessageDisplay;
