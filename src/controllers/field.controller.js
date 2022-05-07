//** --------------------- API  --------------------- */

const { createField } = require('../services/field.service');

const createFieldController = async (req, res) => {
  const input = req.body;
  const data = await createField(input);
  res.status(data.code).json(data);
};

module.exports = {
  createFieldController
};
