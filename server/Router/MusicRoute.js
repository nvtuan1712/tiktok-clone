const express = require('express');
const router = express.Router();
const MusicController = require('../Controller/MusicController')

router.get('/get-list-music', MusicController.getListMusic)
router.get('/get-list-music-upload', MusicController.getListMusicUpload)
router.get('/:name-:id', MusicController.getMusic)

module.exports = router;