import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import configureStore from './store';
import Index from './containers/Index'

const store = configureStore(); 
const history = syncHistoryWithStore(hashHistory, store)

render(
      <Provider store={store}>  
       <Router history={hashHistory}>
    <Route path="/" component={Index}/>
  </Router>
      
      </Provider>,
  document.getElementById('root')
);