import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { Page } from "../Page";
import { FeatureRoutes } from "../FeatureRoutes";

const csrfToken = document
  .querySelector("meta[name=csrf-token]")
  .getAttribute("content");

const client = new ApolloClient({
  link: new HttpLink({
    credentials: "same-origin",
    headers: {
      "X-CSRF-Token": csrfToken,
    },
  }),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Page>
          <FeatureRoutes />
        </Page>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
