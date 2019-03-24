import React from 'react';
import styled from 'styled-components';

import { Query, Mutation } from 'react-apollo';

import Input from '../../components/Input';
import List from '../../components/List';

import * as queries from './queries';

class Chat extends React.Component {
  state = {
    author: '',
    message: '',
  }

  componentDidMount() {
    const author = window.prompt('닉네임을 입력해 주세요');
    if (author) {
      this.setState({ author });
    } else {
      window.alert('닉네임을 입력하셔야 채팅에 참여하실 수 있습니다');
      this.props.history.push('/');
    }
  }

  handleMessageChange = (e) => {
    const { value } = e.target;
    this.setState({ message: value });
  }

  handleSend = (mutate) => () => {
    const { author, message } = this.state;
    if (message !== '') {
      mutate({ variables: { author, message }});
      this.setState({ message: '' });
    }
  }

  handleSubscribeToMore = (subscribeToMore) => () => {
    subscribeToMore({
      document: queries.MESSAGE_CREATED,
      updateQuery: (prev, { subscriptionData }) => {
        return {
          messages: [
            subscriptionData.data.message,
            ...prev.messages,
          ]
        }
      }
    });
  }

  render() {
    const { message } = this.state;
    return (
      <Wrapper>
        <Mutation
          mutation={queries.CREATE_MESSAGE}
        >
          {(mutate, { data }) => {
            return (
              <Input
                message={message}
                onChange={this.handleMessageChange}
                onSend={this.handleSend(mutate)}
              />
            );
          }}
        </Mutation>

        <Content>
          <Query query={queries.GET_MESSAGES}>
            {({ loading, error, data, subscribeToMore }) => {
              if (loading) return null;
              if (error) return null;

              const { messages } = data;
              return (
                <List
                  messages={messages}
                  subscribeToMore={this.handleSubscribeToMore(subscribeToMore)}
                />
              );
            }}
          </Query>
        </Content>
      </Wrapper>
    )
  }
};

const Wrapper = styled.div`
  height: 100%;
`;

const Content = styled.div`
  height: calc(100% - 5rem);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 0rem 1.6rem;
  padding-top: 2rem;
`;

export default Chat;