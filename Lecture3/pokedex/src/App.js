import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export default class App extends Component {

  render() {
    return (
      <Wrapper>
        <Globalstyle />
        <h1>Welcome to Pokedex Starter!</h1>
      </Wrapper>
    );
  }
}

const Globalstyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0px;
    padding: 0px;
    font-family: "NanumSquare";
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;