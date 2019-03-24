import React from 'react';
import styled from 'styled-components';

class Landing extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Simple Chat</Title>
        <Button>입장하기</Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 5rem;
`;

const Button = styled.button`
  font-family: 'NanumSquare';
  width: 100%;
  background-color: #333;
  border: 0rem;
  border-radius: 0.3rem;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  height: 4.5rem;
  cursor: pointer;
`;

export default Landing;