import { combineEpics } from 'redux-observable'

import exampleEpics from './example'

export default combineEpics(
  ...exampleEpics
)
