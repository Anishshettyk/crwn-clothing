import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

//importing root reducer
import rootReducer from "./root-reducer";
//import root saga
import rootsaga from "./root-saga";

const SagaMiddleware = createSagaMiddleware();

//all the middlewares are passed as a array
const middleware = [SagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

//creating a store with root reducer and all the middlewares
//all the middlewares are spread across the createStore
//storing everything to store variable and exporting it to index.js
export const store = createStore(rootReducer, applyMiddleware(...middleware));

SagaMiddleware.run(rootsaga);

//persisted store
export const persistor = persistStore(store);

export default { store, persistor };
