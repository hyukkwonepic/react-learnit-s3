import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>{children}</Wrapper>
  );
}

const Wrapper = styled.button`
  font-family: "NanumSquare";
  background-color: #333;
  color: #fff;
  font-weight: 700;
  font-size: 1.8rem;
  border: 0px;
  border-radius: 3px;
  height: 4rem;
  line-height: 4rem;
  padding: 0rem 4rem;
  cursor: pointer;
`;

export default Button;