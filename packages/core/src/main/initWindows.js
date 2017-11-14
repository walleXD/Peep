import { resolve } from 'path'
import isDev from 'electron-is-dev'

import createWindow from '@peep/create-window'

const windowIdKeeper = {}

const createMainWindow = () => {
  const mainWindow = createWindow(
    { name: 'main' },
    {
      devURL: `http://localhost:9080`,
      prodURL: `file://${__dirname}/index.html`
    },
    undefined,
    { icon: resolve(__static, 'icon', 'app.png') }
  )
  if (isDev) mainWindow.webContents.openDevTools()
  windowIdKeeper.main = mainWindow.id
}

export default async () => {
  createMainWindow()
}
