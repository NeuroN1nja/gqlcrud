import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from '@apollo/client'
import App from './src/App'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        users: {
          keyArgs: false,
        },
      },
    },
  },
})

const client = new ApolloClient({
  uri: `${process.env.BASE_URL || 'http://localhost:3030'}/graphql`,
  cache,
})

const ApolloApp = (AppComponent) => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
)

ReactDOM.render(ApolloApp(App), document.getElementById('app'))