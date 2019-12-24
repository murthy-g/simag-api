const express = require('express');
const pingRouter = require('./ping');

const router = express.Router({mergeParams: true});
router.use('/ping', pingRouter);

module.exports = router;
