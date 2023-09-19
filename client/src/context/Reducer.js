// This is a Redux reducer function that manages the state related to user authentication and updates.

const Reducer = (state, action) => {
  switch (action.type) {
    // When a user initiates a login request, set isFetching to true, and clear any previous errors.
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    // When a login request is successful, store the user data, set isFetching to false, and clear any errors.
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    // When a login request fails, clear the user data, set isFetching to false, and indicate an error.
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };

    // When an update request starts, maintain the existing state and set isFetching to true.
    case "UPDATE_START":
      return {
        ...state,
        isFetching: true,
      };

    // When an update request is successful, update the user data, set isFetching to false, and clear errors.
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    // When an update request fails, keep the existing user data, set isFetching to false, and indicate an error.
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };

    // When a user logs out, clear the user data, set isFetching to false, and clear errors.
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    // If the action type doesn't match any of the defined cases, return the current state unchanged.
    default:
      return state;
  }
};

export default Reducer;

// This reducer handles different actions related to user authentication and updates, updating the state accordingly based on the action type. It manages the user data, loading state (isFetching), and error flags to provide a structured way to handle user-related actions within a Redux store.
