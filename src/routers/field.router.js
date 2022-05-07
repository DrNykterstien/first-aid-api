const { Router } = require('express');
const schemaValidationMiddleware = require('../middlewares/schemaValidation.middleware');
const createFieldSchema = require('./schemas/field/create-field.schema');
const { createFieldController } = require('../controllers/field.controller');

const router = Router();

router
  .route('/')
  .get()
  .post(schemaValidationMiddleware(createFieldSchema, 'body'), createFieldController);

router.route('/:id').get().patch().delete();

module.exports = router;
