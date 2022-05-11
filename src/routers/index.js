const { Router } = require('express');
const uploadMiddleware = require('../middlewares/upload.middleware');
const fieldRouter = require('./field.router');

const router = Router();

router.use('/fields', fieldRouter);
router.post('/upload', uploadMiddleware.fields([{name: 'fields-banners', maxCount: 1}, {name: 'fields-icons', maxCount: 1}]));

module.exports = router;
