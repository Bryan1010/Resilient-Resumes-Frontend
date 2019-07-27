import CookieParser from 'cookieparser'

export default function ({ store, redirect, req }) {
  // If the user is authenticated redirect to home page
  const auth = CookieParser.parse(req.headers.cookie)
  if (store.state.login.auth) {
    if (auth.auth !== null) { return redirect('/') }
  }
}
