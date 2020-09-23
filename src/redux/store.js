import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

//importing root reducer
import rootReducer from "./root-reducer";

//all the middlewares are passed as a array
const middleware = [logger];

//creating a store with root reducer and all the middlewares
//all the middlewares are spread across the createStore
//storing everything to store variable and exporting it to index.js
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
