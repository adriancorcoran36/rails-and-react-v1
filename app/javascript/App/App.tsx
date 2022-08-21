import React from "react";
import { useImagesQuery } from "graphql/types";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { Image } from "./components";

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

const MainComponent = () => {
  const { data: imagesData, loading } = useImagesQuery();

  if (loading) {
    return <span>"Loading..."</span>;
  }
  return (
    <div>
      <h1>Images</h1>
      <ul>
        {imagesData.images.map(({ id, title, downloads }) => (
          <Image title={title} downloads={downloads} key={id} />
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MainComponent />
    </ApolloProvider>
  );
};

export default App;
