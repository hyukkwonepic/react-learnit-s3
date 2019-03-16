import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import PostItem from '../../components/PostItem';

import { fetchPostList } from './actions';

class PostList extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostList());
  }

  render() {
    const { posts, isLoading } = this.props;
    return (
      <Wrapper>
        <Header />
        <Contents>
          {
            isLoading ? <h1>로딩 중...</h1> : posts.map((post) => {
              return <PostItem key={post.id} post={post} />
            })
          }
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

const mapStateToProps = (state) => {
  return state.postList;
}


export default connect(mapStateToProps)(PostList);