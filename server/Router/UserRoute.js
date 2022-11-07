const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController')

router.get('/get-list', userController.getListUser)
router.get('/get-list-suggest', userController.getSuggestUser)
router.post('/follow-user', userController.followUser)
router.post('/unfollow-user', userController.unFollowUser)
router.get('/get-follow-user', userController.getfollowUser)
router.get('/auth/:nickname', userController.getCurrentUser)
router.get('/:nickname', userController.getCurrentUserWithoutJWT)

module.exports = router;