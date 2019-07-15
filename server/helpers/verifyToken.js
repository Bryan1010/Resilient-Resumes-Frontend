const jwt = require('jsonwebtoken')

module.exports = function auth(req, res, next) {
  const token = req.header('rr-a')
  if (!token) {
    return res.state(401).send('Access Dennied')
  }
  try {
    const verified = jwt.verify(token, 'WEAREPENNSTATE')
    req.user = verified
  } catch (err) {
    res.status(400).send('Invalid Token')
  }
}
