import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache } from "@apollo/client";

import apolloLogger from 'apollo-link-logger';
import { getTokens, saveTokens } from "./manage-tokens";

function backendApiUrl() {
  return 'http://localhost:4000/graphql';
}

const BACKEND_API_URL = backendApiUrl();

const httpLink = new HttpLink({
  uri: BACKEND_API_URL
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // это общий обработчик всех запросов в GraphQL
  // в каждый запрос добавляются токены
  // в каждом результате ожидаются токены - они сохраняются
  var tokens = getTokens();
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-access-token': tokens.accessToken,
      'x-refresh-token': tokens.refreshToken
    }
  }));

  // это общий обработчик всех результатов из GraphQL - если в ответе прийдет accessToken то надо его сохранить и далее использовать
  return forward(operation).map((response) => {

    const context = operation.getContext();
    const {
      response: { headers },
    } = context;

    
    console.log("TEST:", headers);

    if (headers) {
      console.log("TEST123");
      const accessToken = headers.get('x-access-token');

      debugger;
      
      console.log("ACCESS TOKEN:", accessToken);

      if (accessToken) {
        tokens.accessToken = accessToken;
        saveTokens(tokens);
      }
    }

    return response;
  });
});

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  link: from([apolloLogger, authMiddleware, httpLink])
});

export default client;
