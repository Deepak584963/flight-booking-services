const express = require('express');
const router = express.Router();

const v1ApiRouts = require('./v1/index');
router.use('/v1', v1ApiRouts)


module.exports = router