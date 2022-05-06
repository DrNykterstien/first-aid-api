const { Router } = require('express');
const fieldRouter = require('./field.router');

const router = Router();

router.use('/fields', fieldRouter);

module.exports = router;
