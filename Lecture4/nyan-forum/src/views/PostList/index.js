import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

import Header from '../../components/Header';
import PostItem from '../../components/PostItem';

class PostList extends React.Component {

  state = {
    posts: []
  }

  async componentDidMount() {
    try {
      const postsSnapshot = await db.collection('posts').get();

      const posts = postsSnapshot.docs.map((snapshot) => {
        const data = snapshot.data();
        return {
          ...data,
          id: snapshot.id,
        }
      });

      if (posts && posts.length !== 0) {
        this.setState({
          posts
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <Wrapper>
        <Header />
        <Contents>
          {posts.map((post) => {
            return <PostItem key={post.id} post={post} />
          })}
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