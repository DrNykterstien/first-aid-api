const { Router } = require('express');
const schemaValidationMiddleware = require('../middlewares/schemaValidation.middleware');
const createFieldSchema = require('./schemas/field/create-field.schema');
const getFieldsSchema = require('./schemas/field/get-fields.schema');
const {
  createFieldController,
  deleteFieldController,
  getFieldController,
  getFieldsController
} = require('../controllers/field.controller');

const router = Router();

router
  .route('/')
  .get(schemaValidationMiddleware(getFieldsSchema, 'query'), getFieldsController)
  .post(schemaValidationMiddleware(createFieldSchema, 'body'), createFieldController);

router.route('/:id').get(getFieldController).patch().delete(deleteFieldController);

module.exports = router;
