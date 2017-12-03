import rxFetch from 'rxjs-fetch'
import urlFactory from 'url-factory'

const token = 'zFuFaN9rD-GIAepi9QTKj5fB2ec'
const apiURL = urlFactory('https://oauth.reddit.com')

export const getPosts$ = (loc = '', params = {}) => {
  const url = apiURL(loc, params)
  return rxFetch(
    url,
    {
      method: 'get',
      headers: new Headers({
        Authorization: `Bearer ${token}`
      })
    }
  ).json()
}
