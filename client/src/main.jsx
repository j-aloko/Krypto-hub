import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TransactionContextProvider } from "./Context/TransactionContext";

ReactDOM.render(
  <React.StrictMode>
    <TransactionContextProvider>
      <App />
    </TransactionContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
