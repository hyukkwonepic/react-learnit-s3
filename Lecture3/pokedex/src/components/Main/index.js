import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Gallery from '../Gallery';

import logo from '../../assets/pokedex-logo.svg';

export default class Main extends React.Component {
  render() {
    const { selectedPokemonData } = this.props;
    return (
      <Wrapper>
        <Logo>
          <img src={logo} alt="logo" width="70px" />
        </Logo>
        <Gallery sprites={ selectedPokemonData ? selectedPokemonData.sprites : null}/>
        <Info>
          {
            selectedPokemonData ? (
              <div>
                <p>이름: {selectedPokemonData.species.name}</p>
                <p>신장: {selectedPokemonData.height}</p>
                <p>무게: {selectedPokemonData.weight}</p>
              </div>
            ): null
          }
        </Info>
      </Wrapper>
    );
  }
}

Main.propTypes = {
  selectedPokemonData: PropTypes.object
}

const Wrapper = styled.div`
  display: inline-block;
  width: 640px;
  height: 800px;
  background-color: #DF0025;
  border: 3px solid #333;
  padding: 0px 100px;
`;

const Logo = styled.div`
  padding: 30px 0px;
  text-align: center;
`;

const Info = styled.div`
  padding: 30px;
  border: 3px solid #333;
  height: 180px;
  background-color: #fff;
  text-align: left;

  p {
    font-size: 20px;
    font-weight: 800;
    margin: 0px;
  }
`;