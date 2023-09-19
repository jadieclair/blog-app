// Import necessary dependencies from React
import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer"; // Import the Reducer function for managing state

// Define an initial state for the context
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null, // Initialize user data from local storage or as null
  isFetching: false, // Initialize the fetching state as false
  error: false, // Initialize the error state as false
};

// Create a React context with the initial state
export const Context = createContext(INITIAL_STATE);

// Define the ContextProvider component to manage the context state
export const ContextProvider = ({ children }) => {
  // Use the useReducer hook to manage state and actions
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  // Use useEffect to update local storage whenever the user data changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  // Provide the state and dispatch function to child components through the context
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch, // Provide the dispatch function for state updates
      }}
    >
      {children}{" "}
      {/* Render child components wrapped in this context provider */}
    </Context.Provider>
  );
};

// This code sets up a context and provider for managing global state in the React application. 
// The context holds user data, fetching status, and error status. 
// It uses the useReducer hook to manage state updates and the useEffect hook to sync user data with local storage.
// Child components can access this state and a dispatch function for making updates through the context.
