import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Main from './components/Main';
import List from './components/List';

export default class App extends Component {

  state = {
    pokemons: [],
    selectedPokemonUrl: null,
    selectedPokemonData: null,
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000');
      if (response.status >= 400) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();

      const { results } = data;

      this.setState({
        pokemons: results
      });
      
    } catch (e) {
      console.error(e);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (this.state.selectedPokemonUrl !== prevState.selectedPokemonUrl) {
        const response = await fetch(this.state.selectedPokemonUrl);
        if (response.status >= 400) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
  
        this.setState({
          selectedPokemonData: data
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  handleListSelect = (url) => {
    this.setState({
      selectedPokemonUrl: url
    });
  }

  render() {
    const { pokemons, selectedPokemonUrl, selectedPokemonData } = this.state;
    return (
      <Wrapper>
        <Globalstyle />
        <Main selectedPokemonData={selectedPokemonData} />
        <List
          pokemons={pokemons}
          selectedPokemonUrl={selectedPokemonUrl}
          onSelect={this.handleListSelect}
        />
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