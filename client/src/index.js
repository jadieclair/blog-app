import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"; // Adjust the import here
import App from "./App";
import { ContextProvider } from "./context/Context";

const root = createRoot(document.getElementById("root")); // Use createRoot from react-dom/client

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
