import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

import Header from '../../components/Header';

class PostList extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Contents>
        </Contents>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div``;

const Contents = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default PostList;