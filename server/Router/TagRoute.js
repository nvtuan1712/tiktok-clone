const express = require('express');
const router = express.Router();
const TagController = require('../Controller/TagController')

router.get('/get-list-trendy', TagController.getListTrendy)
router.post('/get-list-trendy-upload', TagController.getListTrendyUpload)
router.get('/:name', TagController.getTrendy)

module.exports = router;