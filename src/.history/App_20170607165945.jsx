import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store';
import App from './containers/App'

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store)

render(
      <Provider store={store}>
        <App history={history}/>
      </Provider>,

  document.getElementById('root')
);