const commentModel = require('../Models/CommentModel')
const videoModel = require('../Models/VideoModel')

const postComment = async (req, res) => {
    try {
        const idVideo = req.params.id;
        const currentVideo = await videoModel.findOne({ _id: idVideo })
        const comment = new commentModel({
            author: req.body.iduser,
            content: req.body.content,
            heart_count: 0,
        })
        await comment.save();

        await videoModel
        .updateOne(
            { _id: idVideo},
            { $push: { comment: comment._id }, $set: { comment_count: currentVideo.comment_count + 1 } }
        )
        res.send('Comment success!')
    } catch (error) {
        res.status(404).send(error);
    }
}

const getListComment = async (req, res) => {
    try {
        const idVideo = req.params.id
        const listComment = await videoModel.find({ _id: idVideo }).populate({
            path: 'comment',
            populate: { path: 'author' }
        })
        res.send(listComment.reverse())
    } catch (error) {
        res.status(404).send(error);
    }
}

module.exports = {
    postComment: postComment,
    getListComment: getListComment,
}