import { example } from '../lib/types'
import { increment } from '../actions/example'

// TODO: add explicit imports for rxjs functions
export default [
  action$ =>
    action$
      .ofType(example.incrementAsync)
      .delay(1000)
      .map(action => increment(action.payload))
      .catch(error => {
        console.log('Theres an error')
        console.error(error.message)
      })
]
