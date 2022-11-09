const multer = require("multer");
const imageFilter = require("../Helpers/imageFilter");
const videoModel = require("../Models/VideoModel");
const musicModel = require("../Models/MusicModel");
const userModel = require("../Models/UserModel")

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/video");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({
  storage: storage,
}).single("myVideo");

//Đăng tải video
const uploadVideo = async (req, res) => {
  // console.log(req);
  try {
    upload(req, res, (err) => {
      console.log(req);
      if (err) {
        console.log(err);
      } else {
        console.log(req);
        let private = false
        let music = req.body.music
        if(req.body.selection === 'Riêng tư') {
          private = true
        }

        if(req.body.music === '') {
          music = '636b365a488cd6684bd147a2'
        }
        const newVideo = new videoModel({ 
          description: req.body.description,
          trendy: req.body.trendy, 
          music: music,
          isPrivate: private,
          video: `http://localhost:5000/public/video/${req.file.filename}`,
          heart_count: 0,
          share_count: 0,
          comment_count: 0,
          author: req.body.author,
        });
        newVideo
          .save()
          .then(() => res.send('Upload Success!'))
          .catch((err) => console.log(err));
      }
    });
  } catch (error) {}
};

//Lấy ra toàn bộ video của người dùng
const getUserVideo = async (req, res) => {
  const bearerHeader = req.headers["authorization"];
  const accessToken = bearerHeader.split(" ")[1];
  const bearerHeader1 = req.headers["iduser"];
  const idUserToken = bearerHeader1.split(" ")[1];
  try {
    // console.log(idUser);
    const nickname = req.params.nickname
    const user = await userModel.find({ nickname: nickname })
    const listVideo = await videoModel.find({ author: user[0]._id }).populate('author')
    res.status(200).send(listVideo)
  } catch (error) {
    console.log(error);
  }
}

//Lấy ra chi tiết video của người dùng
const getCurrentVideo = async (req, res) => {
  try {
    // console.log(idUser);
    const nickname = req.params.nickname
    const id = req.params.id
    const user = await userModel.find({ nickname: nickname })
    const listVideo = await videoModel.find({ author: user[0]._id }).find({ _id: id }) .populate('author').populate('trendy').populate('music')
    res.status(200).send(listVideo)
  } catch (error) {
    console.log(error);
  }
}




module.exports = {
  uploadVideo: uploadVideo,
  getUserVideo: getUserVideo,
  getCurrentVideo: getCurrentVideo,
};
