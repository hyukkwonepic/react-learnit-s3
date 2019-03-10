import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

import PostItem from '../../components/PostItem';
import Comments from '../../components/Comments';
import Header from '../../components/Header';

class PostDetail extends React.Component {

  state = {
    post: null,
    comments: []
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const postSnapshot = await db.collection('posts').doc(id).get();
      const post = postSnapshot.data();

      const commentsSnapshot = await Promise.all(post.comments.map(ref => ref.get()));
      const comments = commentsSnapshot.map((snapshot) => {
        return {
          id: snapshot.id,
          ...snapshot.data()
        }
      });

      this.setState({
        post,
        comments,
      });

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { post, comments } = this.state;

    if (post) {
      return (
        <Wrapper>
          <Header />
          <Contents>
            <PostItem isDetail post={post} />
            <Comments comments={comments} />
          </Contents>

        </Wrapper>
      );
    }
    return null;
  }
}

const Wrapper = styled.div``;

const Contents = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default PostDetail;