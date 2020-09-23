//This file represents all the state of our application
import { combineReducers } from "redux"; //this will combine all the reducers

//importing user reducer
import userReducer from "./user/user.reducer";

//combining all the reducers and exoorting them
export default combineReducers({
  user: userReducer,
});
