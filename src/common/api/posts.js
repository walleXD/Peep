import { apiURL } from './utils'
import fetch$ from 'observable-fetch'

const token = 'Wh6f98selAj-iunTbcd9Ky_6lXA'

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
