const express = require('express');
const router = express.Router();
const accountController = require('../Controller/AccountController')

router.get('/', accountController.getListAccount)

module.exports = router;