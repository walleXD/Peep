import { example } from '../lib/types'

export const increment = payload => ({
  type: example.increment,
  payload
})

export const decrement = payload => ({
  type: example.decrement,
  payload
})
