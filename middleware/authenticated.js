const Cookie = require('js-cookie')

export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (store.state.login.auth === null || store.state.login.auth === '') {
    Cookie.get('auth')
    return redirect('/login')
  }
}
