const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Resume = require('../models/Resume')
const User = require('../models/User')

router.get('/all', async (req, res) => {
  let _id = ''
  if (req.body._id) { _id = req.body._id }
  if (req.query._id) { _id = req.query._id }

  const token = jwt.verify(_id, process.env.JWT_TOKEN_PRIVATE_KEY)

  const dbResumes = await Resume.find({ User: token._id })
  res.send(dbResumes)
})

router.get('/downloadLink/:resumeId', async (req, res) => {
  const resumeId = req.params.resumeId
  let _id = ''
  if (req.body._id) { _id = req.body._id }
  if (req.query._id) { _id = req.query._id }

  const token = jwt.verify(_id, process.env.JWT_TOKEN_PRIVATE_KEY)

  const dbUser = await User.findById(token._id,
    { FName: 1, LName: 1, Suffix: 1, Email: 1, _id: 0 })

  const dbResume = await Resume.findById(resumeId)

  const objToReturn = {
    user: JSON.stringify(dbUser),
    resume: JSON.stringify(dbResume),
    docRequest: true
  }

  res.send(objToReturn)
})

router.get('/all/card', async (req, res) => {
  let _id = ''
  if (req.body._id) { _id = req.body._id }
  if (req.query._id) { _id = req.query._id }

  const token = jwt.verify(_id, process.env.JWT_TOKEN_PRIVATE_KEY)
  const dbResumes = await Resume.find(
    { User: token._id },
    { PositionApplyingFor: true, ObjectiveStatement: true, _id: true }
  )

  res.send({
    dbResumes
  })
})

router.post('/create', async (req, res) => {
  const token = jwt.verify(req.body._id, process.env.JWT_TOKEN_PRIVATE_KEY)

  req.body._id = null
  req.body.User = token._id
  req.body.Name = token.Name

  const resumeToSave = new Resume(req.body)
  try {
    // eslint-disable-next-line no-unused-vars
    const savedResume = await resumeToSave.save()

    res.send({ user: resumeToSave._id })
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = router
