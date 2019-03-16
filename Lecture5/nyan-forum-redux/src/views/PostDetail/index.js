import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import PostItem from '../../components/PostItem';
import Comments from '../../components/Comments';
import Header from '../../components/Header';

import { fetchPostDetail } from './actions';

class PostDetail extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(fetchPostDetail(match.params.id));
  }

  render() {
    const { post, comments, isLoading } = this.props;

    return (
      <Wrapper>
        <Header />
        <Contents>
          {!isLoading && post ? (
            <>
              <PostItem isDetail post={post} />
              <Comments comments={comments} />
            </>
          ) : <h1>로딩 중...</h1>}
        </Contents>
      </Wrapper>
    );
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
  return state.postDetail;
}

export default connect(mapStateToProps)(PostDetail);