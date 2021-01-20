import React from "react";
import { render } from "react-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import App from "./App";
require("dotenv").config();
export const SERVER_URL = "https://cafe-menu-api1.herokuapp.com/";

console.log(SERVER_URL);
const client = new ApolloClient({
  link: createUploadLink({
    uri: SERVER_URL + "graphql",
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
