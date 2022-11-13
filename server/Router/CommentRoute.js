const express = require('express');
const router = express.Router();
const commentController = require('../Controller/CommentController')

router.post('/upload', commentController)

module.exports = router;