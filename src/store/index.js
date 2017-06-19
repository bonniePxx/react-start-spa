import { createStore, combineReducers,applyMiddleware,compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
import rootReducer from '../reducers'
// import { routerReducer } from 'react-router-redux'


module.exports = function(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    // combineReducers({
    //   ...rootReducer,
    //   routing: routerReducer
    // }),
    combineReducers({
      ...rootReducer
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}