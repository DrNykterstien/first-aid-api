const createOne = async (model, data) => {
  try {
    const doc = await model.create({ ...data });
    return {
      data: doc,
      success: true,
      code: 200,
      message: 'Operation done successfully'
    };
  } catch (error) {
    return {
      data: null,
      success: false,
      code: 400,
      message: error.message
    };
  }
};

const updateOne = async (model, where, data) => {
  try {
    const updatedDoc = await model
      .findOneAndUpdate(
        {
          ...where
        },
        data,
        { new: true }
      )
      .lean()
      .exec();

    if (!updatedDoc) {
      return {
        data: null,
        success: false,
        code: 404,
        message: 'Not Found'
      };
    }

    return {
      data: updatedDoc,
      success: true,
      code: 200,
      message: 'Operation done successfully'
    };
  } catch (error) {
    return {
      data: null,
      success: false,
      code: 400,
      message: error.message
    };
  }
};

const deleteOne = async (model, where) => {
  try {
    const removed = await model.findOneAndRemove({
      ...where
    });
    if (!removed) {
      return {
        data: null,
        success: false,
        code: 404,
        message: 'Not Found'
      };
    }

    return {
      data: true,
      success: true,
      code: 200,
      message: 'Operation done successfully'
    };
  } catch (error) {
    return {
      data: null,
      success: false,
      code: 400,
      message: error.message
    };
  }
};

const getOne = async (model, where = {}, fields = {}) => {
  try {
    const doc = await model
      .findOne({ ...where })
      .select({ ...fields })
      .lean()
      .exec();

    if (!doc) {
      return {
        data: null,
        success: false,
        code: 404,
        message: 'Not Found'
      };
    }
    return {
      data: doc,
      success: true,
      code: 200,
      message: 'Operation done successfully'
    };
  } catch (error) {
    return {
      data: null,
      success: false,
      code: 404,
      message: error.message
    };
  }
};

const getMany = async (model, where = {}, fields = {}, sort = { createdAt: 1 }) => {
  const docs = await model
    .find(where)
    .select({ ...fields })
    .sort({ ...sort })
    .lean()
    .exec();

  return {
    data: docs,
    success: true,
    code: 200,
    message: 'Operation done successfully'
  };
};

module.exports = {
  createOne,
  updateOne,
  deleteOne,
  getOne,
  getMany
};
