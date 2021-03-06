const Joi = require("@hapi/joi");

module.exports.registerValidation = data => {
  const schema = {
    name: Joi.string()
      .min(2)
      .required(),
    email: Joi.string()
      .min(5)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  };
  return Joi.validate(data, schema);
};

module.exports.loginValidation = data => {
    const schrema = {
      email: Joi.string()
        .min(2)
        .required()
        .email(),
      password: Joi.string()
        .min(6)
        .required()
    };
    return Joi.validate(data, schrema);
  };