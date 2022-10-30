const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController')

router.get('/', userController.getListUser)

module.exports = router;