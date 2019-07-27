const mongoose = require('mongoose')
const md5 = require('md5')

const userSchema = new mongoose.Schema({
  Email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
    max: 255
  },
  FName: {
    type: String,
    required: true,
    trim: true,
    min: 2
  },
  LName: {
    type: String,
    required: true,
    min: 2
  },
  Suffix: { type: String, trim: true, default: '' },
  Phone: { type: String, trim: true, default: '' },
  Password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  CreatedOn: {
    type: Date,
    default: Date.now
  }
})

userSchema.virtual('gravatar').get(function () {
  const hash = md5(this.Email)
  return `https://gravatar.com/avatar/${hash}?s=200`
})

module.exports = mongoose.model('User', userSchema)
