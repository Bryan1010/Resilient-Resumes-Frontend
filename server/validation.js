const Joi = require('@hapi/joi')

// Validation
const registerValidation = (data) => {
  const schema = {
    FName: Joi.string().min(2).required(),
    LName: Joi.string().min(2).required(),
    Suffix: Joi.string().min(2),
    Phone: Joi.string().min(8),
    Email: Joi.string().min(6).required().email(),
    Password: Joi.string().min(6).required()
  }
  return Joi.validate(data, schema)
}

const loginValidation = (data) => {
  const schema = {
    Email: Joi.string().required().email(),
    Password: Joi.string().min(6).required()
  }
  return Joi.validate(data, schema)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
