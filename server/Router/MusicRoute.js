const express = require('express');
const router = express.Router();
const MusicController = require('../Controller/MusicController')

router.get('/get-list-music', MusicController.getListMusic)
router.post('/get-list-music-upload', MusicController.getListMusicUpload)
router.get('/:name', MusicController.getMusic)

module.exports = router;