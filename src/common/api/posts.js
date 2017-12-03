import { apiURL } from './utils'
import fetch$ from 'observable-fetch'

const token = '1J_QO-Z1_yTurKXcrG9eg8j0Dz8'

export const getPosts$ = (loc = '', params = {}) => {
  const url = apiURL(loc, params)
  return fetch$(
    url,
    {
      method: 'get',
      headers: new Headers({
        Authorization: `Bearer ${token}`
      })
    }
  )
}
