import React from 'react';
import styled from 'styled-components';

export default class Gallery extends React.Component {
  render() {
    return (
      <Wrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Main = styled.div`
  width: 100%;
  height: 270px;
  border: 3px solid #333;
  background-color: #fff;
  margin-bottom: 30px;
  ${(props) => {
    if (props.image) {
      return `background-image: url(${props.image});`
    }
  }}
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
`;