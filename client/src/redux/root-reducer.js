//This file represents all the state of our application
import { combineReducers } from "redux"; //this will combine all the reducers
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //calling the storage from the redux-persist library

//importing user reducer
import userReducer from "./user/user.reducer";
//importing  cart reducer
import CartReducer from "./cart/cart.reducer";
//importing directory reducer
import directoryReducer from "./directory/directory.reducer";
//importing shop reducer
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

//combining all the reducers and persistConfig and exporting them by persistReducer function
export default persistReducer(persistConfig, rootReducer);
