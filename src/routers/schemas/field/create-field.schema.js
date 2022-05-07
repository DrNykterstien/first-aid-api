const Joi = require('joi');

const createFieldSchema = Joi.object().keys({
  title: Joi.string().trim().min(2).max(50).required(),
  icon: Joi.string().trim().required(),
  banner: Joi.string().trim().required(),
  procedures: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().min(2).trim().required(),
        description: Joi.string().min(2).trim().required(),
        rank: Joi.number().required()
      })
    )
    .min(1)
    .required(),
  relatedFields: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().trim().required(),
        fieldId: Joi.string().trim().required(),
        rank: Joi.number().required()
      })
    )
    .min(1)
    .optional(),
  faqs: Joi.array()
    .items(
      Joi.object({
        question: Joi.string().min(2).trim().required(),
        answer: Joi.string().min(2).trim().required(),
        rank: Joi.number().required()
      })
    )
    .min(1)
    .required(),
  rank: Joi.number().required(),
  isActive: Joi.boolean().optional()
});

module.exports = createFieldSchema;
