import { subreddit, posts, general } from 'common/lib/types'

export const setActive = sub => ({
  type: subreddit.setActive,
  payload: sub
})

export const clearActive = () => ({
  type: subreddit.clearActive,
  payload: ''
})

export const getPosts = () => ({
  type: posts.getPosts,
  payload: ''
})

export const getMorePosts = () => ({
  type: posts.getMorePosts,
  payload: ''
})

export const setPosts = payload => ({
  type: posts.setPosts,
  payload
})

export const setMorePosts = payload => ({
  type: posts.setMorePosts,
  payload
})

export const clearPosts = () => ({
  type: posts.clearPosts,
  payload: ''
})

export const setAnchors = payload => ({
  type: posts.setAnchors,
  payload
})

export const setError = payload => ({
  type: general.setError,
  payload
})

export const setToken = payload => ({
  type: general.setToken,
  payload
})

export const getToken = () => ({
  type: general.getToken,
  payload: ''
})

export const setBootingState = payload => ({
  type: general.setBootingState,
  payload
})
