import { apiURL } from './utils'
import fetch$ from 'observable-fetch'

export const getPosts$ = (token, loc = '', params = {}) => {
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
