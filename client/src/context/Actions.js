// Action creator for initiating a login request.
export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

// Action creator for indicating a successful login and providing the user data.
export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

// Action creator for indicating a login failure.
export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

// Action creator for logging the user out.
export const Logout = () => ({
  type: "LOGOUT",
});

// Action creator for initiating an update request.
export const UpdateStart = (userCredentials) => ({
  type: "UPDATE_START",
});

// Action creator for indicating a successful update and providing the updated user data.
export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

// Action creator for indicating an update failure.
export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});

// These action creators allow you to dispatch actions with specific types and optional payload data to interact with your Redux store. For example, LoginStart can be used to initiate a login request, and LoginSuccess is used to indicate a successful login and provide the user data as payload. Similarly, other action creators are defined for different actions like logging out and handling update requests.
