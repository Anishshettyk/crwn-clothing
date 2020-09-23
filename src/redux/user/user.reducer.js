import { userActionTypes } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
}; //settings the current state value

const userReducer = (state = INITIAL_STATE, action) => {
  //state=INITIAL_STATE settings the state to initial state
  switch (action.type) {
    //action.type is a string
    case userActionTypes.SET_CURRENT_USER:
      //return a new object that is the new state
      return {
        ...state,
        currentUser: action.payload,
        //=>payload set's the current user value
      };

    default:
      return state;
    //if the action.type does not match our case then return the state itself
  }
};

export default userReducer;
