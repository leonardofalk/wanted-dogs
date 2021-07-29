import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"

export const GraphQLProvider = ({ children }) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3001/graphql',
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
