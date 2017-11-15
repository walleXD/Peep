import { example } from '../lib/types'
import { mapTo } from 'rxjs/operators'

export default [
  action$ =>
    action$
      .ofType(example.incrementAsync)
      .delay(1000)
      .mergeMap(action =>
        mapTo({ type: 'example/INCREMENT', payload: action.payload })
      )
      .catch(error => {
        console.log('Theres an error')
        console.error(error.message)
      })
]
