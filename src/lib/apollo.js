import { ApolloClient, InMemoryCache } from 'apollo-client-preset';
import { BatchHttpLink } from 'apollo-link-batch-http';
import gql from 'graphql-tag';

const link = new BatchHttpLink({ uri: 'http://localhost:3000/graphql' });

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore({})
});

export function query(query, variables) {
  return client.query({
    query: gql`${query}`,
    variables
  });
}
