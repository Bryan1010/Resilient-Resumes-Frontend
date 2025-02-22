const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Address = require('../models/Address')
const { registerValidation, loginValidation } = require('../validation')

router.post('/register', async (req, res) => {
  // Validating data before creating user
  const { error } = registerValidation(req.body)

  if (error) {
    // return res.status(400).send(error.details[0].message)
  }

  // Check if the user is already in the DB
  const emailExist = await User.findOne({ Email: req.body.Email })
  if (emailExist) {
    return res.status(400).send('Email Already Exist')
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.Password, salt)

  try {
    const user = new User({
      FName: req.body.FName,
      LName: req.body.LName,
      Suffix: req.body.Suffix,
      Phone: req.body.Phone,
      Email: req.body.Email,
      Password: hashedPassword,
      LinkedIn: req.body.LinkedIn,
      PorfolioWebsite: req.body.PersonalSite
    })
    await user.save()

    if (req.body.Address) {
      const address = new Address({
        User: user._id,
        PrimaryAddress: true,
        Line1: req.body.Address.Line1,
        Line2: req.body.Address.Line2,
        City: req.body.Address.City,
        State: req.body.Address.State,
        Zip: req.body.Address.Zip,
        Country: req.body.Address.Country
      })
      await address.save()
    }

    const token = jwt.sign({ _id: user._id, Name: { FName: user.FName, LName: user.LName, Suffix: user.Suffix } }, process.env.JWT_TOKEN_PRIVATE_KEY)
    return res.header('rr-a', token).send({
      status: 'success',
      userId: token,
      FName: user.FName,
      LName: user.LName,
      name: `${user.FName} ${user.LName}`,
      gravatar: user.gravatar,
      email: user.Email
    })
  } catch (err) {
    return res.status(500).send({ status: process.env.API_STATUS_ERROR, message: 'Server Error. Please retry later', detail: err })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
  // Validating data before trying to log in the user
    const { error } = loginValidation(req.body)

    if (error) {
      return res.status(200).send({ status: process.env.API_STATUS_FAILED, message: error.details[0].message })
    }

    // Check if the user exists
    const user = await User.findOne({ Email: req.body.Email })
    if (!user) {
      return res.status(200).send({ Status: process.env.API_STATUS_FAILED, message: 'Email or password is incorrect' })
    }

    // check if password is correct
    const validPass = await bcrypt.compare(req.body.Password, user.Password)
    if (!validPass) {
      return res.status(200).send({ status: process.env.API_STATUS_FAILED, message: 'Email or password is incorrect' })
    }

    const token = jwt.sign({ _id: user._id, Name: { FName: user.FName, LName: user.LName, Suffix: user.Suffix } }, process.env.JWT_TOKEN_PRIVATE_KEY)
    return res.header('rr-a', token).send({
      status: 'success',
      userId: token,
      FName: user.FName,
      LName: user.LName,
      name: `${user.FName} ${user.LName}`,
      gravatar: user.gravatar,
      email: user.Email
    })
  } catch (ex) {
    return res.status(500).send({ status: process.env.API_STATUS_ERROR, message: 'Server Error. Please retry later' })
  }
})

router.post('/reauth', async (req, res) => {
  try {
    const decryptedId = jwt.verify(req.body._id, process.env.JWT_TOKEN_PRIVATE_KEY)
    const user = await User.findById(decryptedId._id)

    return res.send({
      status: 'success',
      userId: req.body._id,
      FName: user.FName,
      LName: user.LName,
      name: `${user.FName} ${user.LName}`,
      gravatar: user.gravatar,
      email: user.Email
    })
  } catch (err) {
  }
})

module.exports = router
