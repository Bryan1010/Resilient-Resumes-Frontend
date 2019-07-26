import CookieParser from 'cookieparser'
import axios from 'axios'
export const state = () => ({
  user: {
    email: '',
    password: ''
  },
  status: '',
  errors: {},
  authenticated: {
    access_token: '',
    user_id: '',
    FirstName: '',
    LastName: '',
    email: '',
    role: '',
    type: '',
    gravatar: ''
  },
  auth: null
})

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
  setRRAuth(state, authObj) {
    // eslint-disable-next-line no-console
    console.log(authObj.userId + 'asas')
    state.auth = authObj.userId
    state.authenticated.access_token = authObj.userId
    state.authenticated.FirstName = authObj.FName
    state.authenticated.LastName = authObj.LName
    state.authenticated.email = authObj.email
    state.authenticated.gravatar = authObj.gravatar
  },
  auth_request(state) {
    state.status = 'loading'
  }
}

export const getters = {
  get(state) {
    return state.authenticated
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    // const auth = null
    // const user = null
    if (req.headers.cookie) {
      const parsed = CookieParser.parse(req.headers.cookie)
      try {
        // eslint-disable-next-line no-console
        console.log(process.env.baseUrl)
        if (parsed.auth) {
          const user = await axios.post(process.env.baseUrl + '/api/user/reauth', {
            _id: parsed.auth
          })
          // auth = JSON.parse(parsed.auth)
          // user = await helpers.reauth(auth)
          // eslint-disable-next-line no-console
          // console.log(user.data)
          commit('login/setRRAuth', user.data)
          return user.data
        }
      } catch (err) {
        // No valid cookie found
      }
    }
    // commit('login/setRRAuth', user)
    // commit('setAuth', auth)
    // this.$sentry.captureException(new Error('example'))
  }
  // login({commit},user)
}

export const helpers = {
  async reauth(userID) {
    const user = await this.$axios.$post('/api/user/reauth', {
      _id: userID
    })
    // eslint-disable-next-line no-console
    console.log(user + 'a')
    // store.commit('login/setRRAuth', user.data)
    return user.data
  }
}
