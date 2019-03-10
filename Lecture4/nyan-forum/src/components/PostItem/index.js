import React from 'react';
import styled from 'styled-components';
// <Router />로 렌더링 되지 않는 컴포넌트는 history에 접근할 수 없기 때문에 withRouter를 활용합니다
import { withRouter } from 'react-router-dom';

const PostItem = (props) => {
  const { post, isDetail } = props;
  const { author, title, content, comments } = post;

  const handleClick = () => {
    const { history, match, post, isDetail } = props;
    if (!isDetail) {
      history.push(`posts/${post.id}`);
    }
  }

  return (
    <Wrapper isDetail={isDetail} onClick={handleClick}>
      <Author>
        <span>{author}</span>
      </Author>
      <Title>
        <span>{title}</span>
      </Title>
      <Content>
        {content}
      </Content>
      {
        isDetail ? null : (
          <CommentCount>
            <span>댓글 {comments.length}개</span>
          </CommentCount>
        )
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 3rem;
  width: 100%;
  margin-bottom: 2rem;
  cursor: ${(props) => props.isDetail ? 'initial' : 'pointer'};
`;

const Author = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #333;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #333;
`;

const Content = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: #333;
`;

const CommentCount = styled.div`
  margin-top: 2rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: #999;
`;

// PostItem 컴포넌트를 withRouter로 감쌉니다
export default withRouter(PostItem);