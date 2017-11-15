import { example } from '../lib/types'

const { increment, decrement } = example
const INITIAL_STATE = {
  score: 0
}

export default(state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case increment: return { score: state.score + payload }
    case decrement: return { score: state.score - payload }
    default: return state
  }
}
