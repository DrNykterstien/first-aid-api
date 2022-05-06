const { Router } = require('express');

const router = Router();

router.route('/').get().post();

router.route('/:id').get().patch().delete();

module.exports = router;
