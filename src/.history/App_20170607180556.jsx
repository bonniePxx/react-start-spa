import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { Router, Route, Redirect, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom'

import configureStore from "./store";
import Index from "./containers/Index";

const store = configureStore();


render(
  <Provider store={store}>
    <HashRouter>
      <Route path='/' component={Index}/>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
