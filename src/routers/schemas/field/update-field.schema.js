const Joi = require('joi');

const updateFieldSchema = Joi.object().keys({
  title: Joi.string().trim().min(2).max(50).optional(),
  rank: Joi.number().integer().min(1).optional(),
  isActive: Joi.boolean().optional()
});

module.exports = updateFieldSchema;
