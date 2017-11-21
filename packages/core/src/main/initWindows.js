import { resolve } from 'path'
import isDev from 'electron-is-dev'

import createWindow from './createWindow'

const windowIdKeeper = {}

const createMainWindow = () => {
  const mainWindow = createWindow(
    { name: 'main' },
    {
      devURL: `http://localhost:9080`,
      prodURL: `${__dirname}/index.html`
    },
    undefined,
    {
      icon: resolve(__static, 'icon', 'app.png')
    }
  )
  mainWindow.webContents.openDevTools()
  if (isDev) windowIdKeeper.main = mainWindow.id
}

// const createRedditWindow = () => {
//   const window = createWindow(
//     { name: 'reddit', hidden: true },
//     {
//       devURL: `http://localhost:9080`,
//       prodURL: `file://${__dirname}/index.html`
//     }
//   )
//   if (isDev) window.webContents.openDevTools()
//   windowIdKeeper.reddit = window.id
// }

export default async () => {
  // createRedditWindow()
  createMainWindow()
}
