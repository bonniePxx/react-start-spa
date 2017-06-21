import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

// 引入全局样式
import './styles/common/common.css'


import configureStore from "./store";
import Index from "./containers/Index";

const store = configureStore();


render(
  <Provider store={store}>
    <Index/>
  </Provider>,
  document.getElementById("root")
);
