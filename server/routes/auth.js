const router = require('express').Router()
const bcrypt = require('bcrypt')
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
    const savedUser = await user.save()
    res.send({ user: user._id })
  } catch (err) {
    res.status(400).send(err)
  }
})

// Login
router.post('/login', async (req, res) => {
  // Validating data before trying to log in the user
  const { error } = loginValidation(req.body)

  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  // Check if the user exists
  const user = await User.findOne({ Email: req.body.Email })
  if (!user) {
    return res.status(400).send('Email or password is incorrect')
  }

  // check if password is correct
  const validPass = await bcrypt.compare(req.body.Password, user.Password)
  if (!validPass) {
    return res.status(400).send('Email or password is incorrect')
  }

  return res.send({ user: user._id })
})

module.exports = router
