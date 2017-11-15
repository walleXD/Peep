import initStore from 'common/lib/initStore'
import isDev from 'electron-is-dev'

export default () => initStore(
  undefined,
  {
    isDev,
    injectMiddlewares: (prod, dev) => [
      ...prod,
      ...isDev && [
        ...dev,
        require('redux-logger').createLogger()
      ]
    ]
  }
)
