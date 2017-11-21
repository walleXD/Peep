import { example } from '../lib/types'

export const increment = payload => ({
  type: example.increment,
  payload
})

export const decrement = payload => ({
  type: example.decrement,
  payload
})

export const incrementAsync = payload => ({
  type: example.incrementAsync,
  payload
})
