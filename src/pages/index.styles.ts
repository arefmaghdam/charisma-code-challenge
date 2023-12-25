import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2.8rem;
  max-width: 45rem;
  max-height: 100%;
  padding: 10px;
  top: 75px;
`;

export const CoinList = styled.div`
  position: relative;
  border: 1px solid blue;
  height: 95%;
  width: 100%;
  padding: 10px;
  top: 0;
  margin-bottom: 20px;
  overflow-y: scroll;
  border-radius: 50px;
  &::-webkit-scrollbar {
    display: none; 
  }
`;

export const StyledUl = styled.ul`
  padding: 15px;
`;

export const StyledLink = styled.p`
  position: relative;
  bottom: 0;
`;

