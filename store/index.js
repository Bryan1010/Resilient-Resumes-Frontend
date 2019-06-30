export const strict = false
export const state = () => ({})
export const mutations = {}
export const getters = {}

export const actions = {
  nuxtServerInit({ commit }, { req, res }) {
    if (req.headers.cookie) {
      const cookieparser = require('cookieparser')
      const parsed = cookieparser.parse(req.headers.cookie)
      const details = {
        access_token: parsed.mg_t,
        user_id: parsed.mg_u,
        name: parsed.mg_f,
        email: parsed.mg_e,
        role: parsed.mg_rl,
        type: parsed.mg_tp
      }
      commit('login/SET_AUTH_COOKIE_SSR', { details, res })
    }
  }
}
