import styled from 'styled-components';

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 51px;
  height: 26px;
  opacity: 0.58;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background: #131313;
    }

    &:focus + span {
      background: #131313;
    }

    &:checked + span:before {
      transform: translateX(26px);
      background: #e5ece9;
    }
  }

  span {
    border-radius: 34px;
    display: block;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #131313;
    transition: background-color 0.4s;
    box-shadow: -4px -4px 10px 0px #3a3a3aed, 4px 4px 10px 0px #00000086,
      4px 4px 10px 0px #000000da inset, -4px -4px 10px 0px #3a3a3ab1 inset;

    &:before {
      border-radius: 50%;
      position: absolute;
      content: '';
      height: 20px;
      width: 20px;
      left: 3px;
      bottom: 3px;
      background: #6a6a6a;
      transition: transform 0.4s;
    }
  }
`;
