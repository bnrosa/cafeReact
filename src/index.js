import React from "react";
import { render } from "react-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import App from "./App";

const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:4000/graphql",
  }),
  cache: new InMemoryCache(),
});

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App className="font-sans" />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
