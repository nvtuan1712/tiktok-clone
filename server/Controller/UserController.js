const jwt = require("jsonwebtoken");
const userModel = require("../Models/UserModel");
const videoModel = require("../Models/VideoModel");
const multer = require("multer");

//dành cho admin
const getListUser = async (req, res) => {
  //1.get token form client
  const bearerHeader = req.headers["authorization"];
  const accessToken = bearerHeader.split(" ")[1];

  try {
    //verifile token
    const decodeJwt = jwt.verify(accessToken, process.env.SECRECT_JWT);
    if (decodeJwt) {
      const listUser = await userModel.find();
      res.status(200).send(listUser);
    }
  } catch (error) {
    //gửi mã lỗi về client để biết refresh token
    res.status(400).send(error);
  }
};

//get người dùng hiện tại đang đăng nhập
const getCurrentUser = async (req, res) => {
  //1.get token form client
  const bearerHeader = req.headers["authorization"];
  const accessToken = bearerHeader.split(" ")[1];
  const nickNameToken = jwt.decode(accessToken)?.nickname;

  try {
    //verifile token
    const nickname = req.params.nickname;
    let user = await userModel.findOne({ nickname: nickname });
    const decodeJwt = jwt.verify(accessToken, process.env.SECRECT_JWT);
    if (decodeJwt) {
      if (nickname === nickNameToken) {
        user._doc = { ...user._doc, isMe: true };
      }
    }
    const listVideo = await videoModel.find({ author: user._id });
    let heartcount = 0;
    listVideo.map((item) => {
      heartcount += item.heart_count;
    });
    await userModel.updateOne(
      { nickname: nickname },
      { $set: { heart_count: heartcount } }
    );
    res.status(200).json(user);
  } catch (error) {
    //gửi mã lỗi về client để biết refresh token
    res.status(400).send(error);
  }
};

//get người dùng
const getCurrentUserWithoutJWT = async (req, res) => {
  try {
    //verifile token
    const nickname = req.params.nickname;
    let user = await userModel.findOne({ nickname: nickname });
    res.status(200).json(user);
  } catch (error) {
    //gửi mã lỗi về client để biết refresh token
    res.status(400).send(error);
  }
};

//get người dùng đề xuất(thuộc tích tick = true)
const getSuggestUser = async (req, res) => {
  try {
    const listUserSuggest = await userModel.find({ tick: true });
    res.status(200).send(listUserSuggest);
  } catch (error) {
    res.send(error);
  }
};

//follow người dùng
const followUser = async (req, res) => {
  const bearerHeader = req.body.headers["Authorization"];
  const accessToken = bearerHeader.split(" ")[1];
  const bearerHeader1 = req.body.headers["IdAccount"];
  const idAccount = bearerHeader1.split(" ")[1];
  const bearerHeader2 = req.body.headers["IdUser"];
  const idUser = bearerHeader2.split(" ")[1];

  try {
    //verifile token
    const decodeJwt = jwt.verify(accessToken, process.env.SECRECT_JWT);
    if (decodeJwt) {
      const user = await userModel.findOne({ account: idAccount });
      const userFollow = await userModel.findOne({ _id: idUser });
      await userModel
        .updateOne({ account: idAccount }, { $push: { fllowing: idUser } })
        .updateOne(
          { account: idAccount },
          { $set: { following_count: user.following_count + 1 } }
        );

      await userModel.updateOne(
        { _id: idUser },
        { $set: { follower_count: userFollow.follower_count + 1 } }
      );
      res.status(200).send("Follow thành công!");
    }
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

//unfollow người dùng
const unFollowUser = async (req, res) => {
  const bearerHeader = req.body.headers["Authorization"];
  const accessToken = bearerHeader.split(" ")[1];
  const bearerHeader1 = req.body.headers["IdAccount"];
  const idAccount = bearerHeader1.split(" ")[1];
  const bearerHeader2 = req.body.headers["IdUser"];
  const idUser = bearerHeader2.split(" ")[1];

  try {
    //verifile token
    const decodeJwt = jwt.verify(accessToken, process.env.SECRECT_JWT);
    if (decodeJwt) {
      const user = await userModel.findOne({ account: idAccount });
      const userFollow = await userModel.findOne({ _id: idUser });
      await userModel
        .updateOne({ account: idAccount }, { $pull: { fllowing: idUser } })
        .updateOne(
          { account: idAccount },
          { $set: { following_count: user.following_count - 1 } }
        );

      await userModel.updateOne(
        { _id: idUser },
        { $set: { follower_count: userFollow.follower_count - 1 } }
      );

      res.status(200).send("Unfollow thành công!");
    }
  } catch (error) {
    res.send(error);
  }
};

//Get người dùng đã theo dõi
const getfollowUser = async (req, res) => {
  const bearerHeader = req.headers["authorization"];
  const accessToken = bearerHeader.split(" ")[1];
  const bearerHeader1 = req.headers["idaccount"];
  const idAccount = bearerHeader1.split(" ")[1];
  // const bearerHeader2 = req.body.headers["IdUser"];
  // const idUser = bearerHeader2.split(" ")[1];

  try {
    //verifile token
    const decodeJwt = jwt.verify(accessToken, process.env.SECRECT_JWT);
    if (decodeJwt) {
      const followUser = await userModel.find({ account: idAccount }).populate({
        path: "fllowing",
        populate: { path: "fllowing" },
      });
      res.send(followUser);
    }
  } catch (error) {
    res.send(error);
  }
};

//lấy ra danh sách nhưng video đã like của người dùng
const getLikedVideo = async (req, res) => {
  const bearerHeader1 = req.headers["idaccount"];
  const idAccount = bearerHeader1.split(" ")[1];
  try {
    const likedVideo = await userModel
      .find({ account: idAccount })
      .populate("liked");
    res.send(likedVideo);
  } catch (error) {
    res.send(error);
  }
};

//tìm kiếm người dùng
const searchUser = async (req, res) => {
  try {
    if (req.query.q !== "") {
      const char = req.query.q;
      const listUser = await userModel.find({
        name: { $regex: "^" + char, $options: "i" },
      });
      res.send(listUser);
    } else {
      res.send("No character");
    }
  } catch (error) {
    res.send(error);
  }
};

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({
  storage: storage,
}).single("myImage");

//Update thông tin người dùng
const updateProfile = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        console.log(err);
      } else {
        await userModel.updateOne(
          { _id: req.body.user },
          {
            nickname: req.body.nickname,
            name: req.body.name,
            description: req.body.desc,
            avatar: `http://localhost:5000/public/images/${req.file.filename}`,
          }
        );
      }
    });
    res.send("Update thành công!");
  } catch (error) {}
};

module.exports = {
  getListUser: getListUser,
  getCurrentUser: getCurrentUser,
  getCurrentUserWithoutJWT: getCurrentUserWithoutJWT,
  getSuggestUser: getSuggestUser,
  followUser: followUser,
  unFollowUser: unFollowUser,
  getfollowUser: getfollowUser,
  getLikedVideo: getLikedVideo,
  searchUser: searchUser,
  updateProfile: updateProfile,
};
