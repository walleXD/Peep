const { resolve } = require('path')
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js')

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env)

  config.module.rules.push({
    test: /\.styl$/,
    loader: 'style-loader!css-loader!stylus-loader'
  })

  const alias = {
    ...config.resolve.alias,
    '@': resolve(__dirname, '../', 'src', 'renderer', 'ui')
  }

  const extensions = [
    ...config.resolve.extensions,
    '.styl'
  ]

  config.resolve.alias = alias
  config.resolve.extensions = extensions

  return config
}
