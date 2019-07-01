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
  }
})

export const getters = {
  getUser: state => state.user,
  getAuthenticated: state => state.authenticated,
  getErrors: state => state.errors
}
