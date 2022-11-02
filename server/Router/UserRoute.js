const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController')

router.get('/get-list', userController.getListUser)
router.get('/user', userController.getCurrentUser)
router.get('/get-list-suggest', userController.getSuggestUser)

module.exports = router;