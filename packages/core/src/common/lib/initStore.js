import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import allReducers from '../reducers'

export default (
  preloadedState = {},
  { injectMiddlewares, injectReducers, isDev }
) => {
  const devMiddlewares = [
    require('redux-immutable-state-invariant').default()
  ]
  const prodMiddlewares = []

  const middlewares = injectMiddlewares
    ? injectMiddlewares(prodMiddlewares, devMiddlewares)
    : [ ...prodMiddlewares, ...isDev && devMiddlewares ]
  const reducers = injectReducers
    ? injectReducers(allReducers)
    : combineReducers(allReducers)

  const store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )

  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers/index').default
    store.replaceReducer(nextReducer)
  })

  return store
}
