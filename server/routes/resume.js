const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Resume = require('../models/Resume')

// router.get('/resume/all', async (req, res) => {
//   const token = jwt.verify(req.body._id, process.env.JWT_TOKEN_PRIVATE_KEY)

//   const dbResumes = await Resume.find()
// })

router.post('/create', async (req, res) => {
  const token = jwt.verify(req.body._id, process.env.JWT_TOKEN_PRIVATE_KEY)

  req.body._id = null
  req.body.User = token._id
  req.body.Name = token.Name

  const resumeToSave = new Resume(req.body)
  try {
    // eslint-disable-next-line no-unused-vars
    const savedResume = await resumeToSave.save()
    // eslint-disable-next-line no-console
    console.log(savedResume)
    res.send({ user: resumeToSave._id })
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = router
