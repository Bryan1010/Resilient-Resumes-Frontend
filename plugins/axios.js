import Cookies from 'js-cookie'

export default ({ app: { $axios }, res, req, store, redirect }) => {
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setHeader('X-Requested-With', 'XMLHttpRequest')
  $axios.defaults.baseURL = 'http://homestead1.test'

  $axios.interceptors.response.use(function (response) {
    if (response.headers.authorization) {
      const token = response.headers.authorization.split('Bearer ')
      if (process.server) {
        res.cookie('mg_t', token[1]) // ssr only
      } else {
        Cookies.set('mg_t', token[1])
      }
      store.commit('login/UPDATE_AUTH_COOKIE', token[1])
    }
    return response
  }, function (error) {
    if (error.response.headers.authorization) {
      const token = error.response.headers.authorization.split('Bearer ')
      if (process.server) {
        res.cookie('mg_t', token[1]) // ssr only
      } else {
        Cookies.set('mg_t', token[1])
      }
      store.commit('login/UPDATE_AUTH_COOKIE', token[1])
    }
    return Promise.reject(error)
  })
}
