
import React from 'react';
import styled from 'styled-components';

class List extends React.Component {
  componentDidMount() {
    this.props.subscribeToMore();
  }

  render() {
    const { messages } = this.props;
    return (
      <div>
        {messages.map((item) => {
          const { id, author, message } = item;
            return (
              <Message key={id}>
                <span>
                  <strong>{author}</strong>
                  {message}
                </span>
              </Message>
            );
        })}
      </div>
    )
  }
}

const Message = styled.div`
  margin-bottom: 1rem;
  span {
    font-size: 1.6rem;
    font-weight: 400;
    strong {
      font-size: 1.6rem;
      font-weight: 700;
      margin-right: 2rem;
    }
  }
`;

export default List;