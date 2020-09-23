import { userActionTypes } from "./user.types";

//user action of settings the current user
export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
