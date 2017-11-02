import { ApolloClient, InMemoryCache } from 'apollo-client-preset';
import { BatchHttpLink } from 'apollo-link-batch-http';

const link = new BatchHttpLink({ uri: 'http://localhost:3000/graphql' });

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore({})
});
