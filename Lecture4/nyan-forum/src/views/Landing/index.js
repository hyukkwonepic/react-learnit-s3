import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';

import logo from '../../assets/cat.svg';

export default class Landing extends React.Component {
  render() {
    return (
      <Wrapper>
        <img src={logo} alt="logo" />
        <div>냥포럼</div>
        <Button>입장하기</Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    display: inline-block;
    width: 10rem;
    margin-bottom: 2rem;
  }
  
  div {
    font-size: 2.4rem;
    font-weight: 800;
    color: #333;
    margin-bottom: 3.5rem;
  }
`;
