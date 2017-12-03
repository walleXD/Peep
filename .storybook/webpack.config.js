const { resolve } = require('path')
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js')

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env)

  config.module.rules.push({
    test: /\.styl$/,
    loader: 'style-loader!css-loader!stylus-loader'
  })

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve(__dirname, '../', 'src', 'renderer')
  }

  config.resolve.extensions = [
    ...config.resolve.extensions,
    '.styl'
  ]

  return config
}
