import styled from 'styled-components';

export const FlexboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: left;
  align-items: center;
  padding: 0 15px;
  height: 55px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;
  }
`;

export const StyledLi = styled.li`
  margin: 20px 0;
  font-size: 20px;
  list-style-type: none;
`;

export const ItemGrow1 = styled.div`
  margin: 20px 0;
  font-size: 20px;
  list-style-type: none;
  flex: 1;
  font-size: 15px;
`;

export const ItemGrow2 = styled.div`
  margin: 20px 0;
  font-size: 20px;
  list-style-type: none;
  flex: 3;
  padding-left: 20px;

  p {
    padding: 5px;
    margin: 0 10px;
    font-size: 12px;
    word-wrap: break-word;
    max-width: 150px;
  }

  span {
    width: 54px;
  }
`;
