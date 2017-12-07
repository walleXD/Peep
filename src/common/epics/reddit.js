import { Observable } from 'rxjs/Observable'
import { setAnchors, setMorePosts, setPosts, setError } from '../actions/reddit'
import { posts } from '../lib/types'
import { getPosts$ } from '../api/posts'
import 'rxjs/add/observable/of'

const { getMorePosts, getPosts } = posts

// TODO: Improve error handling in post requests
export default [
  (actions$, store) =>
    actions$
      .ofType(getPosts)
      .mergeMap(() => {
        const { active } = store.getState().reddit
        return (
          getPosts$(active)
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
        const { active, anchors } = store.getState().reddit
        const { after } = anchors
        return (
          getPosts$(active, { after })
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
