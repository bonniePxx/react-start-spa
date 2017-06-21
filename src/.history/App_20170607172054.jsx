import React from 'react';
import {render} from 'react-dom';
//import { Provider } from 'react-redux'
//import { hashHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
// import configureStore from './store';
import Index from './containers/App'

// const store = configureStore(); //store={store}
// const history = syncHistoryWithStore(hashHistory, store)

render(
    //   <Provider>  
    //     <Index/>  // history={history}
    //   </Provider>,
  <Index/>,
  document.getElementById('root')
);