import { ApolloClient } from 'apollo-client';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/graphql' : 'https://YOUR_SERVER_HOST/graphql'
});

const wsLink = new WebSocketLink({
  uri: process.env.NODE_ENV === 'development' ? 'ws://localhost:4000/graphql' : 'wss://YOUR_SERVER_HOST/graphql',
  options: {
    reconnect: true
  }
});

const terminatingLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return (
      kind === 'OperationDefinition' && operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const link = ApolloLink.from([terminatingLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;