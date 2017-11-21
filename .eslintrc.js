module.exports = {
  extends: 'standard',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    __static: true
  },
   plugins: [
    'html'
  ]
}
