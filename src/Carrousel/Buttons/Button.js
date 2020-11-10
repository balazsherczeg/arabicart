import styled from 'styled-components';

const Button = styled.button`
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  height: 48px;
  outline: none;
  padding: 0;
  position: absolute;
  width: 48px;
  z-index: 100;
  opacity: .5;

  &:hover {
    opacity: 1;
  }
`;

export default Button;
