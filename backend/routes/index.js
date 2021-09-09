const express = require('express');

const calculation = require('./calculation/calculation');

const router = express.Router();

router.use('/calculation', calculation);

module.exports = router;
