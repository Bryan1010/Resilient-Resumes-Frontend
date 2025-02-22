const router = require('express').Router()
const jwt = require('jsonwebtoken')
// const axios = require('axios')
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
  dbResume['Objective Statement'] = dbResume.ObjectiveStatement

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
  ).sort({ CreatedOn: -1 })

  res.send({
    dbResumes
  })
})

router.post('/create', async (req, res) => {
  let _userId = ''
  if (req.body._Userid) { _userId = req.body._Userid }
  // if (req.query._Userid) { _userId = req.query._id }
  if (_userId === '') {
    return res.status(400).send(
      { status: process.env.API_STATUS_FAILED,
        message: 'Invalid Request, no User ID found' })
  }
  const token = jwt.verify(_userId, process.env.JWT_TOKEN_PRIVATE_KEY)
  req.body.User = token._id
  // req.body.Name = token.Name

  const resumeToSave = new Resume(req.body)
  try {
    // eslint-disable-next-line no-unused-vars
    const savedResume = await resumeToSave.save()

    res.send({ resumeID: resumeToSave._id })
  } catch (err) {
    res.status(400).send(err)
  }
})

router.post('/save', (req, res) => {
  let resumeID = ''
  if (req.body.resumeID) resumeID = req.body.resumeID

  // User Token decrypt
  let _userId = ''
  if (req.body._Userid) { _userId = req.body._Userid }
  // if (req.query._Userid) { _userId = req.query._id }
  if (_userId === '') {
    return res.status(400).send(
      { status: process.env.API_STATUS_FAILED,
        message: 'Invalid Request, no User ID found' })
  }
  const token = jwt.verify(_userId, process.env.JWT_TOKEN_PRIVATE_KEY)

  // if no resumeid is passed, it's a treat as new resume
  const resume = null
  if (resumeID === '') {
    const currentUser = new User().findById(token._id,
      {
        Phone: 1,
        Email: 1,
        LinkedIn: 1,
        PorfolioWebsite: 1,
        _id: 0
      }
    )

    const resumeObj = {
      User: token._id,
      Name: token.Name,
      ContactInfo: {
        Email: currentUser.Email,
        Phone: currentUser.Phone
      },
      ObjectiveStatement: req.body.ObjectiveStatement,
      PositionApplyingFor: req.body.PositionApplyingFor,
      Achievements: req.body.Achievements,
      Activities: req.body.Activities,
      Experience: req.body.Experience,
      RelevantCourse: req.body.RelevantCourse,
      School: req.body.School,
      Skill: req.body.Skill,
      Websites: req.body.Websites

    }
  } else {
    const resume = new Resume().findById(resumeID)
  }
})

router.post('/:resumeId/getFeedback', async (req, res) => {
  try {
    const resumeId = req.params.resumeId
    let _id = ''
    if (req.body._Userid) { _id = req.body._Userid }
    if (req.query._Userid) { _id = req.query._Userid }

    const token = jwt.verify(_id, process.env.JWT_TOKEN_PRIVATE_KEY)

    const dbUser = await User.findById(token._id)

    const dbResume = await Resume.findOne({ _id: resumeId, User: token._id })

    // eslint-disable-next-line prefer-const
    let AiResume = dbResume

    AiResume.Name.FName = dbUser.FName
    AiResume.Name.LName = dbUser.LName
    AiResume.Name.Suffix = dbUser.Suffix

    if (!AiResume.Name.Suffix) {
      AiResume.Name.Suffix = ''
    }
    AiResume['Objective Statement'] = AiResume.ObjectiveStatement

    // eslint-disable-next-line no-console
    console.log(AiResume)

    // const functionData = new FormData()

    // functionData.set('resume', JSON.stringify(AiResume))

    // // eslint-disable-next-line no-console
    // console.log(functionData)

    // const returnVal = await axios({
    //   method: 'post',
    //   url: 'https://resilientresumes-functions.azurewebsites.net/api/resumeanalysis',
    //   config: { headers: { 'Content-Type': 'multipart/form-data' } },
    //   data: { resume: JSON.stringify(AiResume) }
    // })

    return res.send(AiResume)
  } catch (ex) {
    // eslint-disable-next-line no-console
    console.log(ex)
  }
})

module.exports = router
