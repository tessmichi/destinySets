import 'isomorphic-fetch';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './AppRouter.js';
import './index.styl';

import 'autotrack/lib/plugins/clean-url-tracker';
import 'autotrack/lib/plugins/url-change-tracker';

import { ApolloProvider } from 'react-apollo';
import { client } from './lib/apollo';

const app = (
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>
);

ReactDOM.render(app, document.getElementById('root'));
