'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windows = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _electronIsDev = require('electron-is-dev');

var _electronIsDev2 = _interopRequireDefault(_electronIsDev);

var _electronWindow = require('electron-window');

var _electronWindowState = require('electron-window-state');

var _electronWindowState2 = _interopRequireDefault(_electronWindowState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ name, hidden }, { devURL, prodURL }, windowStateOpts = {}, browserWindowOpts = {}) => {
  const windowState = (0, _electronWindowState2.default)(_extends({
    defaultWidth: 1000,
    defaultHeight: 800,
    file: `${name}-window-state.json`
  }, windowStateOpts));

  const window = (0, _electronWindow.createWindow)(_extends({
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height,
    minWidth: 900,
    minHeight: 620,
    preload: true
  }, browserWindowOpts));

  windowState.manage(window);

  const url = _electronIsDev2.default ? devURL : prodURL;

  if (!hidden || _electronIsDev2.default) window.showURL(url, { name });else window._loadURLWithArgs(url, { name }, () => {});

  return window;
};

exports.windows = _electronWindow.windows;