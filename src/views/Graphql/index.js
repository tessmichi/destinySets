import React from 'react';
import { graphql } from 'react-apollo';

import gql from 'graphql-tag';

const query = gql`
  query gg($itemHash: ID!) {
    item(hash: $itemHash) {
      hash
      displayProperties {
        name
        description
        icon
      }
      inventory {
        tierType {
          displayProperties {
            name
          }
        }
      }
    }
  }
`;

function _Item({ data: { item, loading } }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{item.displayProperties.name}</h1>
      <p>{item.displayProperties.description}</p>
    </div>
  );
}

const Item = graphql(query, {
  options: ({ hash }) => ({ variables: { itemHash: hash } })
})(_Item);

const ITEMS = [2700598110, 2676042151, 3592548939, 2193494689, 3763332442];

export default function Graphql({ data }) {
  return (
    <div style={{ margin: 15 }}>
      <h1>Items</h1>

      {ITEMS.map(itemHash => <Item key={itemHash} hash={itemHash} />)}
    </div>
  );
}
