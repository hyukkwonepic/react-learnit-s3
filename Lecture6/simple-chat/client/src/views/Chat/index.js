import React from 'react';
import styled from 'styled-components';

class Chat extends React.Component {

  // // for subscribeToMore
  // handleSubscribeToMore = (subscribeToMore) => () => {
  //   subscribeToMore({
  //     document: queries.MESSAGE_CREATED,
  //     updateQuery: (prev, { subscriptionData }) => {
  //       return {
  //         messages: [
  //           subscriptionData.data.message,
  //           ...prev.messages,
  //         ]
  //       }
  //     }
  //   });
  // }

  render() {
    return (
      <Wrapper>
        {/* Input */}
        <Content>
          {/* List */}
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