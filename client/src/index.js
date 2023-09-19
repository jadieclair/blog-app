import React from "react";
// import ReactDOM from "react-dom";
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


// The <React.StrictMode> component is used to enable strict mode during development, which helps detect potential issues in the application.

// <ContextProvider> wraps the entire application, providing the user context to all components within it.

// <App /> is the main component of the application, and it's rendered within the context provider, making the user context available throughout the app.
