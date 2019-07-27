import CookieParser from 'cookieparser'
import setUserState from './setUserState'

export default function ({ store, redirect, req }) {
  // If the user is not authenticated
  let auth = null
  if (req) {
    if (typeof req.headers.cookie === 'string' && req.headers.cookie !== '') {
      auth = CookieParser.parse(req.headers.cookie)
      // eslint-disable-next-line no-console
      // console.log(auth.auth)
      setUserState(auth.auth, store)
    }
  }
  if (store.state.login.auth === null && auth === null) {
    return redirect('/login')
  }
}
