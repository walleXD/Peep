import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'

import allReducers from '../reducers'
import allEpics from '../epics'

export default (
  preloadedState = {},
  { injectMiddlewares, injectReducers, isDev }
) => {
  const epicMiddleware = createEpicMiddleware(allEpics)

  const devMiddlewares = [
    require('redux-immutable-state-invariant').default()
  ]
  const prodMiddlewares = [
    epicMiddleware
  ]

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

  module.hot.accept('../epics', () => {
    const rootEpic = require('../epics/index').default
    epicMiddleware.replaceEpic(rootEpic)
  })

  return store
}
