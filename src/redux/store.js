import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

//importing root reducer
import rootReducer from "./root-reducer";

//all the middlewares are passed as a array
const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

//creating a store with root reducer and all the middlewares
//all the middlewares are spread across the createStore
//storing everything to store variable and exporting it to index.js
export const store = createStore(rootReducer, applyMiddleware(...middleware));

//persisted store
export const persistor = persistStore(store);

// export default { store, persistor };
