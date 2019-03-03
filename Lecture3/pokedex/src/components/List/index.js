import React from 'react';
import styled from 'styled-components';

export default class List extends React.Component {
  render() {
    return (
      <Wrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: inline-block;
  width: 250px;
  height: 800px;
  border: 3px solid #333;
  border-left: 0px;
  overflow-y: scroll;
`;

const Item = styled.div`
  cursor: pointer;
  height: 60px;
  padding: 15px 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: ${(props) => props.active ? '#fff' : '#333'};
  background-color: ${(props) => props.active ? '#333' : '#f9f9f9' };
`;