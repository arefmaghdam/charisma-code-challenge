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
  top: 75px;
`;

export const CoinList = styled.div`
  position: relative;
  border: 1.4px solid #282828;
  height: 724px;
  background-color: #131313;
  width: 97%;
  top: 20px;
  overflow-y: scroll;
  border-radius: 35px;
  box-shadow: -4px -4px 10px 0px rgba(45, 45, 45, 0.93), 4px 4px 10px 0px rgba(0, 0, 0, 0.53),
    inset 4px 4px 10px 0px rgba(0, 0, 0, 0.85), inset -4px -4px 10px 0px rgba(30, 30, 30, 0.69);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledUl = styled.ul`
  padding: 0;
  a {
    text-decoration: none;
  }
`;

export const StyledLink = styled.p`
  position: relative;
  bottom: 0;
  font-family: Yekan;
  font-size: 15px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: center;
  color: #e3e3e3;
  margin: 35px 0;
`;

export const StyledTitle = styled.p`
  width: 61px;
  height: 31px;
  top: 42px;
  left: 164px;
  font-family: Yekan;
  font-size: 20px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0px;
  text-align: left;
  color: #e3e3e3;
`;
