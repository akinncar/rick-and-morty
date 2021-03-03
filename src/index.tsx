import * as React from 'react';
import Routes from './routes';
import { ApolloProvider } from '@apollo/client';
import client from './services/client';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}
