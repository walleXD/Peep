
import { app } from 'electron'
import isDev from 'electron-is-dev'
import { windows } from './createWindow'
import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer'

import initWindows from './initWindows'

app.on('ready', async () => {
  if (isDev) {
    await Promise.all([
      installExtension([ REDUX_DEVTOOLS ]),
      require('devtron').install()
    ])
  }
  await initWindows()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

if (module.hot) {
  module.hot.accept('./initWindows', () => {
    Object.keys(windows).map(i => windows[i].close())
    initWindows()
  })
}
