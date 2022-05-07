//** --------------------- API  --------------------- */

const { createField, deleteField, getField, getFields } = require('../services/field.service');

const createFieldController = async (req, res) => {
  const input = req.body;
  const data = await createField(input);
  res.status(data.code).json(data);
};

const deleteFieldController = async (req, res) => {
  const { id } = req.params;
  const data = await deleteField(id);
  res.status(data.code).json(data);
};

const getFieldController = async (req, res) => {
  const { id } = req.params;
  const data = await getField(id);
  res.status(data.code).json(data);
};

const getFieldsController = async (req, res) => {
  const { partial } = req.query;
  const data = await getFields(partial);
  res.status(data.code).json(data);
};

module.exports = {
  createFieldController,
  deleteFieldController,
  getFieldController,
  getFieldsController
};
