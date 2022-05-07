const { Router } = require('express');
const schemaValidationMiddleware = require('../middlewares/schemaValidation.middleware');
const createFieldSchema = require('./schemas/field/create-field.schema');
const {
  createFieldController,
  deleteFieldController,
  getFieldController
} = require('../controllers/field.controller');

const router = Router();

router
  .route('/')
  .get()
  .post(schemaValidationMiddleware(createFieldSchema, 'body'), createFieldController);

router.route('/:id').get(getFieldController).patch().delete(deleteFieldController);

module.exports = router;
