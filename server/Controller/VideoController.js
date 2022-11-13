const multer = require("multer");
const imageFilter = require("../Helpers/imageFilter");
const videoModel = require("../Models/VideoModel");
const musicModel = require("../Models/MusicModel");
const userModel = require("../Models/UserModel");
const trendyModel = require("../Models/TagModel");

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
        let private = false;
        let music = req.body.music;
        if (req.body.selection === "Riêng tư") {
          private = true;
        }

        if (req.body.music === "") {
          music = "636b365a488cd6684bd147a2";
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
          .then(() => res.send("Upload Success!"))
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
    const nickname = req.params.nickname;
    const user = await userModel.find({ nickname: nickname });
    const listVideo = await videoModel
      .find({ author: user[0]._id })
      .populate("author")
      .populate("music")
      .populate("trendy");
    res.status(200).send(listVideo);
  } catch (error) {
    console.log(error);
  }
};

//Lấy ra chi tiết video của người dùng
const getCurrentVideo = async (req, res) => {
  try {
    // console.log(idUser);
    const nickname = req.params.nickname;
    const id = req.params.id;
    const user = await userModel.find({ nickname: nickname });
    const listVideo = await videoModel
      .find({ author: user[0]._id })
      .find({ _id: id })
      .populate("author")
      .populate("trendy")
      .populate("music");
    res.status(200).send(listVideo);
  } catch (error) {
    console.log(error);
  }
};

//Lấy ra video của trendy
const getTrendyVideo = async (req, res) => {
  try {
    const name = req.params.name;
    const trendy = await trendyModel.findOne({ name: name });
    const listVideo = await videoModel
      .find({ trendy: trendy._id })
      .populate("author")
      .populate("trendy")
      .populate("music");
    res.status(200).send(listVideo);
  } catch (error) {
    console.log(error);
  }
};

//Lấy ra video của music
const getMusicVideo = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const music = await musicModel.findOne({ _id: id });
    console.log(music);
    const listVideo = await videoModel
      .find({ music: music._id })
      .populate("author")
      .populate("trendy")
      .populate("music");
    res.status(200).send(listVideo);
  } catch (error) {
    console.log(error);
  }
};

//lấy ra video của những người không follow
const getRandomVideo = async (req, res) => {
  try {
    const listVideo = await videoModel
      .find()
      .populate("author")
      .populate("music")
      .populate("trendy");
    res.status(200).send(listVideo);
  } catch (error) {
    res.status(404).send(error);
  }
};

//lấy ra video của những người không follow nhưng có đăng nhập
const getRandomVideoLogin = async (req, res) => {
  const bearerHeader = req.headers["idaccount"];
  const idAccount = bearerHeader.split(" ")[1];
  const user = await userModel
    .findOne({ account: idAccount })
    .populate("fllowing");
  try {
    const arrFllowing = [];
    user.fllowing.forEach((item) => {
      arrFllowing.push(item.id);
    });
    const listVideo = await videoModel
      .find({ author: { $nin: arrFllowing } })
      .populate("author")
      .populate("music")
      .populate("trendy");
    res.status(200).send(listVideo);
  } catch (error) {
    res.status(404).send(error);
    console.log(error);
  }
};

//lấy ra video của những người có follow có đăng nhập
const getRandomVideoLoginFollow = async (req, res) => {
  const bearerHeader = req.headers["idaccount"];
  const idAccount = bearerHeader.split(" ")[1];
  const user = await userModel
    .findOne({ account: idAccount })
    .populate("fllowing");
  try {
    const listVideo = await videoModel
      .find({ author: user.fllowing })
      .populate("author")
      .populate("music")
      .populate("trendy");
      console.log(listVideo);
    res.status(200).send(listVideo);
  } catch (error) {
    res.status(404).send(error);
    console.log(error);
  }
};

//lấy video đầu tiền của danh sách người dùng đề xuất
const getFirstVideoUser = async (req, res) => {
  try {
    const user = await userModel.find({ tick: true });
    const arrUser = [];
    user.forEach((item) => {
      arrUser.push(item.id);
    });
    const listVideo = await videoModel
      .find({ author: arrUser })
      .populate("author")
      .populate("trendy")
      .populate("music");

    res.send(listVideo);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  uploadVideo: uploadVideo,
  getUserVideo: getUserVideo,
  getCurrentVideo: getCurrentVideo,
  getTrendyVideo: getTrendyVideo,
  getMusicVideo: getMusicVideo,
  getRandomVideo: getRandomVideo,
  getRandomVideoLogin: getRandomVideoLogin,
  getFirstVideoUser: getFirstVideoUser,
  getRandomVideoLoginFollow: getRandomVideoLoginFollow,
};
