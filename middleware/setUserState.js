import axios from 'axios'
export default async function (userID, store) {
  const user = await axios.post('/api/user/reauth', {
    _id: userID
  })
  store.commit('login/setRRAuth', user.data)
  // eslint-disable-next-line no-console
  console.log('hello')
  return user.data
}
