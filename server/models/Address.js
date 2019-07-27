const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addressSchema = new Schema({
  User: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply an owner!'
  },
  PrimaryAddress: {
    type: Boolean,
    default: false
  },
  Line1: {
    type: String,
    trim: true,
    required: 'Address Line 1 is empty, please suply a value for this field'
  },
  Line2: {
    type: String,
    trim: true
  },
  City: {
    type: String,
    trim: true
  },
  State: {
    type: String,
    trim: true
  },
  Zip: {
    type: String,
    trim: true
  },
  Country: {
    type: String,
    trim: true
  },
  CreatedOn: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Address', addressSchema)
