import axios from 'axios'
import Cookies from 'js-cookie'

const API = process.env.NEXT_PUBLIC_API_URL

export const api = axios.create({
  baseURL: API,
  withCredentials: true,
  withXSRFToken: true,
  headers: { Accept: 'application/json' },
})

api.interceptors.request.use(async (config) => {
  const method = (config.method || 'get').toLowerCase()
  if (['post','put','patch','delete'].includes(method)) {
    await fetch(`${API}/sanctum/csrf-cookie`, {
      credentials: 'include',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    })
    const xsrf = Cookies.get('XSRF-TOKEN')
    if (xsrf) config.headers['X-XSRF-TOKEN'] = xsrf
  }
  return config
})
