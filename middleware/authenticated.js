import CookieParser from 'cookieparser'
import setUserState from './setUserState'

export default function ({ store, redirect, req }) {
  // If the user is not authenticated
  let auth = null
  if (req) {
  // eslint-disable-next-line no-console
    console.log(req.headers.cookie)
    if (typeof req.headers.cookie === 'string' && req.headers.cookie !== '') {
      auth = CookieParser.parse(req.headers.cookie)
      setUserState(auth, store)
    }
  }
  if (store.state.login.auth === null && auth === null) {
    if (auth.auth === null) { return redirect('/login') }
  }
}
