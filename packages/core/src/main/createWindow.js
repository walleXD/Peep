import isDev from 'electron-is-dev'
import { createWindow, windows } from 'electron-window'
import windowStateKeeper from 'electron-window-state'

export default (
  { name, hidden },
  { devURL, prodURL },
  windowStateOpts = {},
  browserWindowOpts = {}
) => {
  const windowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800,
    file: `${name}-window-state.json`,
    ...windowStateOpts
  })

  const window = createWindow({
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height,
    minWidth: 900,
    minHeight: 620,
    preload: true,
    ...browserWindowOpts
  })

  windowState.manage(window)

  const url = isDev ? devURL : prodURL

  if (!hidden || isDev) window.showURL(url, { name })
  else window._loadURLWithArgs(url, { name }, () => {})

  return window
}

export { windows }
