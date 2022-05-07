const { createOne, deleteOne } = require('../utils/crud');
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

const deleteField = id => {
  try {
    return deleteOne(FieldModel, { _id: id });
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
  createField,
  deleteField
};
