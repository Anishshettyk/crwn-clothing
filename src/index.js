import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux"; //component from react-redux
//=>provider is a component which is the parent of our application.

import "./index.css";
import App from "./App";

//imported redux from redux store
//settings the store in provider from react-redux
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
