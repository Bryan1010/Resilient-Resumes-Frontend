const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { registerValidation, loginValidation } = require('../validation')

router.post('/register', async (req, res) => {
  // Validating data before creating user
  const { error } = registerValidation(req.body)

  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  // Check if the user is already in the DB
  const emailExist = await User.findOne({ Email: req.body.Email })
  if (emailExist) {
    return res.status(400).send('Email Already Exist')
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.Password, salt)

  const user = new User({
    FName: req.body.FName,
    LName: req.body.LName,
    Suffix: req.body.Suffix,
    Phone: req.body.Phone,
    Email: req.body.Email,
    Password: hashedPassword
  })
  try {
    // eslint-disable-next-line no-unused-vars
    const savedUser = await user.save()
    res.send({ user: user._id })
  } catch (err) {
    res.status(400).send(err)
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
  // Validating data before trying to log in the user
    const { error } = loginValidation(req.body)

    if (error) {
      return res.status(200).send({ Status: process.env.API_STATUS_FAILED, Message: error.details[0].message })
    }

    // Check if the user exists
    const user = await User.findOne({ Email: req.body.Email })
    if (!user) {
      return res.status(400).send({ Status: process.env.API_STATUS_FAILED, Message: 'Email or password is incorrect' })
    }

    // check if password is correct
    const validPass = await bcrypt.compare(req.body.Password, user.Password)
    if (!validPass) {
      return res.status(400).send({ Status: process.env.API_STATUS_FAILED, Message: 'Email or password is incorrect' })
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN_PRIVATE_KEY)
    return res.header('rr-a', token).send({
      status: 'success',
      userId: token,
      FName: user.FName,
      LName: user.LName,
      name: `${user.FName} ${user.LName}`
    })
  } catch (ex) {
    return res.status(500).send({ Status: process.env.API_STATUS_ERROR, Message: 'Server Error. Please retry later' })
  }
})

module.exports = router
