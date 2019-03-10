import React from 'react';
import styled from 'styled-components';

const Comments = ({ comments }) => {
  return (
    <Wrapper>
      <Header>
        <span>댓글 {comments.length}개</span>
      </Header>
      {
        comments.map((comment) => {
          const { id, author, content } = comment;
          return (
            <Comment key={id}>
              <strong>{author}</strong>
              <span>{content}</span>
            </Comment>
          );
        })
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
`;

const Header = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 2rem;
`;

const Comment = styled.div`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 1rem;
  strong {
    font-weight: 700;
    margin-right: 1rem;
  }
  span {
    font-weight: 400;
  }
`;

export default Comments;