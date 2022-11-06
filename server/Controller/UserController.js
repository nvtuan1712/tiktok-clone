const jwt = require("jsonwebtoken");
const userModel = require("../Models/UserModel");
const accountModel = require("../Models/AccountModel");
const { populate } = require("../Models/UserModel");

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
  const nickNameToken = jwt.decode(accessToken)?.nickname

  try {
    //verifile token
    const nickname = req.params.nickname
    let user = await userModel.findOne({ nickname: nickname });
    const decodeJwt = jwt.verify(accessToken, process.env.SECRECT_JWT);
    if (decodeJwt) {
      if(nickname === nickNameToken) {
        user._doc = {...user._doc, isMe: true}
      }
    }
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
      const followUser = 
      await userModel
      .updateOne(
        { account: idAccount },
        { $push: { fllowing: idUser } } 
      )
      res.status(200).send('Follow thành công!');
    }
  } catch (error) {
    res.send(error);
  }
};

//follow người dùng
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
      const followUser = 
      await userModel
      .updateOne(
        { account: idAccount },
        { $pull: { fllowing: idUser } }
      )
      res.status(200).send('Unfollow thành công!');
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
      const followUser = 
      await userModel
      .find({ account: idAccount})
      .populate({
        path: 'fllowing',
        populate: { path: 'fllowing' }
      })
      res.send(followUser)
    }
  } catch (error) {
    res.send(error);
  }
};


module.exports = {
  getListUser: getListUser,
  getCurrentUser: getCurrentUser,
  getSuggestUser: getSuggestUser,
  followUser: followUser,
  unFollowUser: unFollowUser,
  getfollowUser: getfollowUser,
};
