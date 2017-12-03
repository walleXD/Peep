import { resolve } from 'path'
import isDev from 'electron-is-dev'

import createWindow from './createWindow'

const windowIdKeeper = {}

const createMainWindow = () => {
  const mainWindow = createWindow(
    { name: 'main' },
    {
      devURL: `http://localhost:9080`,
      prodURL: resolve(__dirname, 'index.html')
    }
  )

  windowIdKeeper.main = mainWindow.id
  if (isDev) mainWindow.webContents.openDevTools()
}

export default () => {
  createMainWindow()
}
