const express = require('express');
const router = express.Router();
const videoController = require('../Controller/VideoController')

router.post('/upload', videoController.uploadVideo)
router.get('/get-list-video-user/:nickname', videoController.getUserVideo)
router.get('/:nickname/:id', videoController.getCurrentVideo)

module.exports = router;