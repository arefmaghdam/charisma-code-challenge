import styled from "styled-components";

export const FlexboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: left;

  div {
    flex-grow: 1;
  }
`;

export const StyledLi = styled.li`
  margin: 35px 10px;
  font-size: 20px;
  list-style-type: none;
`;