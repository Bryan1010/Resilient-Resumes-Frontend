const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Address = require('../models/Address')

router.post('/create', async (req, res) => {
  const token = jwt.verify(req.body._id, process.env.JWT_TOKEN_PRIVATE_KEY)

  req.body._id = null
  req.body.User = token._id
  req.body.Name = token.Name

  const addressToSave = new Address(req.body)
  try {
    await addressToSave.save()

    res.status(200).send({ user: addressToSave._id })
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = router
