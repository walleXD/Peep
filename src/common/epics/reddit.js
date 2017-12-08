import { Observable } from 'rxjs/Observable'
import { setAnchors, setMorePosts, setPosts, setError, setToken, setBootingState } from '../actions/reddit'
import { posts, general } from '../lib/types'
import { getPosts$ } from '../api/posts'
import getToken$ from '../api/getToken'
import 'rxjs/add/observable/of'

const { getMorePosts, getPosts } = posts
const { getToken } = general

// TODO: Improve error handling in post requests
export default [
  actions$ =>
    actions$
      .ofType(getToken)
      .mergeMap(() => {
        return (
          getToken$()
            .flatMap(({ error, ...rest }) => {
              if (error) throw new Error(error)
              return [
                setToken(rest),
                setBootingState(false)
              ]
            })
            .catch(({ message }) => Observable.of(
              setError({ loc: 'Token Request', message })
            ))
        )
      }),
  (actions$, store) =>
    actions$
      .ofType(getPosts)
      .mergeMap(() => {
        const { active, apiToken: { access_token } } = store.getState().reddit
        return (
          getPosts$(access_token, active)
            .flatMap(({ data: { children, before, after } }) => [
              setPosts(children),
              setAnchors({ before, after })
            ])
            .catch(error => Observable.of(
              setError({ loc: 'Subreddit Load', message: error })
            ))
        )
      }),
  (actions$, store) =>
    actions$.ofType(getMorePosts)
      .mergeMap(() => {
        const { active, anchors, apiToken: { access_token } } = store.getState().reddit
        const { after } = anchors
        return (
          getPosts$(access_token, active, { after })
            .flatMap(({ data: { children, before, after } }) => [
              setMorePosts(children),
              setAnchors({ before, after })
            ])
            .catch(({message}) => Observable.of(
              setError({ loc: 'Subreddit Load more', message })
            ))
        )
      })
]
