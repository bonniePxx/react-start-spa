import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";



import configureStore from "./store";
import BasicExample from "./containers/Index";

const store = configureStore();


render(
  <Provider store={store}>
    <BasicExample/>
  </Provider>,
  document.getElementById("root")
);
