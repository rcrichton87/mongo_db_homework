var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/ships', require('./ships'));

module.exports = router;