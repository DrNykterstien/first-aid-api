const Joi = require('joi');

const getFieldsSchema = Joi.object().keys({
  partial: Joi.string()
    .valid(...['full', 'minimal'])
    .optional()
    .default('minimal')
});

module.exports = getFieldsSchema;
