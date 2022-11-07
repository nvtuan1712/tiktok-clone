const express = require('express');
const router = express.Router();
const videoController = require('../Controller/VideoController')

router.post('/upload', videoController.uploadImage)

module.exports = router;