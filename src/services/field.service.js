const { createOne } = require('../utils/crud');
const FieldModel = require('../models/field.model');

const createField = field => {
  try {
    return createOne(FieldModel, { ...field });
  } catch {
    return {
      data: null,
      success: false,
      code: 500,
      message: 'Internal Server Error'
    };
  }
};

module.exports = {
  createField
};
