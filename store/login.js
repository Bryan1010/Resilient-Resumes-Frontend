const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  user: {
    email: '',
    password: ''
  },
  errors: {},
  authenticated: {
    access_token: '',
    user_id: '',
    name: '',
    email: '',
    role: '',
    type: ''
  },
  auth: null
})

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  }
}

export const getters = {

}
