import gql from 'graphql-tag';

export const GET_MESSAGES = gql`
  query GetMessages {
    messages {
      id
      author
      message
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($author: String!, $message: String!) {
    createMessage(author: $author, message: $message) {
      id
      author
      message
    }
  }
`;

export const MESSAGE_CREATED = gql`
  subscription message {
    message {
      id
      author
      message
    }
  }
`;