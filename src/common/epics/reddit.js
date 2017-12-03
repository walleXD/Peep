import { setAnchors, setMorePosts, setPosts } from '../actions/reddit'
import { posts } from '../lib/types'
import { getPosts$ } from '../api/posts'

const { getMorePosts, getPosts } = posts

export default [
  (actions$, store) =>
    actions$
      .ofType(getPosts)
      .mergeMap(() => {
        const { active } = store.getState().reddit
        return getPosts$(active)
      })
      .flatMap(({ data: { children, before, after } }) => [
        setPosts(children),
        setAnchors({ before, after })
      ])
      .catch(error => {
        console.error(error)
      }),
  (actions$, store) =>
    actions$.ofType(getMorePosts)
      .mergeMap(() => {
        const { active, anchors } = store.getState().reddit
        const { after } = anchors
        return getPosts$(active, { after })
      })
      .flatMap(({ data: { children, before, after } }) => [
        setMorePosts(children),
        setAnchors({ before, after })
      ])
]
