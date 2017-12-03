import { combineEpics } from 'redux-observable'

import exampleEpics from './example'
import reddit from './reddit'

export default combineEpics(
  ...exampleEpics,
  ...reddit
)
