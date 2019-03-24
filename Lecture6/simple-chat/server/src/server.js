import { GraphQLServer, PubSub } from 'graphql-yoga';
import gql from 'graphql-tag';

let messageId = 0;
let messages = [];

const typeDefs = gql`
  type Query {
    messages: [Message!]!
  }

  type Mutation {
    createMessage(author: String!, message: String!): Message!
  }

  type Subscription {
    message: Message
  }

  type Message {
    id: ID!
    author: String!
    message: String!
  }
`;

const resolvers = {
  Query: {
    messages(root, args, context, info) {
      return messages;
    }
  },

  Mutation: {
    createMessage(root, args, context, info) {
      const { author, message } = args;
      const newMessage = {
        id: messageId,
        author,
        message
      };

      messageId++;
      messages = [ ...messages, newMessage ];

      pubsub.publish('MESSAGE_CREATED', {
        message: newMessage
      });

      return newMessage;
    }
  },

  Subscription: {
    message: {
      subscribe(root, args, context, info) {
        return pubsub.asyncIterator('MESSAGE_CREATED');
      }
    }
  }
}

const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start({
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/graphql',
  playground: '/'
}, () => {
  console.log('http://localhost:4000에서 확인할 수 있습니다.');
})