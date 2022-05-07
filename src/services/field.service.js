const { createOne, deleteOne, getOne, getMany } = require('../utils/crud');
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

const getField = id => {
  try {
    return getOne(FieldModel, { _id: id });
  } catch {
    return {
      data: null,
      success: false,
      code: 500,
      message: 'Internal Server Error'
    };
  }
};

const getFields = partial => {
  try {
    let fields = { title: 1, icon: 1, rank: 1 };
    if (partial == 'full') fields = {};
    return getMany(FieldModel, {}, fields, { rank: 1 });
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
  deleteField,
  getField,
  getFields
};
