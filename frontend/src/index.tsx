import { ApolloProvider } from "@apollo/client/react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import './css/index.css';

import { BrowserRouter } from "react-router-dom";

//import '@coreui/coreui/dist/css/coreui.min.css'

import client from "./ApolloClient";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
