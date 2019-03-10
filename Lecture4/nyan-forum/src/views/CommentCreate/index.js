import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

import Header from '../../components/Header';
import Button from '../../components/Button';

class CommentCreate extends React.Component {

  state = {
    author: '',
    content: ''
  }

  handleChange = (type) => (e) => {
    this.setState({
      [type]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const confirm = window.confirm('정말로 등록하시겠습니까?');
  
    if (confirm) {
      const { id } = this.props.match.params;
      const { author, content } = this.state;

      const newCommentRef = db.collection('comments').doc();
      await newCommentRef.set({
        id: newCommentRef.id,
        author,
        content,
      });


      const postSnapshot = await db.collection('posts').doc(id).get();
      const commentsByPost = postSnapshot.data().comments;
      await db.collection('posts').doc(id).update({
        comments: [
          ...commentsByPost,
          newCommentRef
        ]
      });

      alert('성공적으로 등록되었습니다');
      this.props.history.goBack();
    }
  }

  render() {
    const { author, content } = this.state;
    return (
      <Wrapper>
        <Header />
        <Contents>
          <Form>
            <Nickname>
              <Label>닉네임</Label>
              <Input value={author} onChange={this.handleChange('author')} />
            </Nickname>
            <Content>
              <Label>내용</Label>
              <Textarea value={content} onChange={this.handleChange('content')} />
            </Content>
            <Button onClick={this.handleSubmit}>댓글 쓰기</Button>
          </Form>
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

const Form = styled.form`
  text-align: center;
  width: 100%;
  padding: 5rem 4rem;
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #fff;
`;

const Nickname = styled.div`
  margin-bottom: 4rem;
`;

const Content = styled.div`
  margin-bottom: 4rem;
`;

const Label = styled.div`
  text-align: left;
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  font-family: 'NanumSquare';
  box-sizing : border-box;
  height: 4rem;
  width: 100%;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 0rem;
  padding-left: 1rem;
  font-size: 1.6rem;
  color: #333;
`;

const Textarea = styled.textarea`
  resize: none;
  font-family: 'NanumSquare';
  box-sizing : border-box;
  width: 100%;
  height: 15rem;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 3px;
  font-size: 1.6rem;
  color: #333;
  padding: 1rem;
`;

export default CommentCreate;