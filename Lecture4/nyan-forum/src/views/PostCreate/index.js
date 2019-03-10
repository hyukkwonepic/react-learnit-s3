import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';


import Header from '../../components/Header';
import Button from '../../components/Button';

class PostCreate extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Contents>
          <Form>
            <Nickname>
              <Label>닉네임</Label>
              <Input />
            </Nickname>
            <Title>
              <Label>제목</Label>
              <Input />
            </Title>
            <Content>
              <Label>내용</Label>
              <Textarea />
            </Content>
            <Button>글 쓰기</Button>
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

const Title = styled.div`
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

export default PostCreate;