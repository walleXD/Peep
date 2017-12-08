import urlFactory from 'url-factory'
import fetch$ from 'observable-fetch'
import { Base64 } from 'js-base64'

const getTokenURL = urlFactory('https://www.reddit.com/api/v1/access_token')
const clientId = process.env.ELECTRON_WEBPACK_APP_CLIENT_ID
const deviceId = process.env.ELECTRON_WEBPACK_APP_DEVICE_ID
console.log(process.env)
const grantType = 'https://oauth.reddit.com/grants/installed_client'

export default (refreshToken) => {
  if (refreshToken) {}
  const url = getTokenURL('', {
    'grant_type': grantType,
    'device_id': deviceId
  })
  return fetch$(
    url,
    {
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Base64.encode(clientId + ':')}`
      }),
      method: 'post'
    }
  )
}
