import { actions as loginActions } from './login'

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    await loginActions.nuxtServerInit({ commit }, { req })
  }
}
