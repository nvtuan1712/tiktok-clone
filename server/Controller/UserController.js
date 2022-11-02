const jwt = require("jsonwebtoken");
const userModel = require("../Models/UserModel");
const accountModel = require("../Models/AccountModel");

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
    console.log(error);
    res.status(400).send(error);
  }
};

//get người dùng hiện tại đang đăng nhập
const getCurrentUser = async (req, res) => {
  //1.get token form client
  const bearerHeader = req.headers["authorization"];
  const accessToken = bearerHeader.split(" ")[1];
  const bearerHeader1 = req.headers["id"];
  const idAccount = bearerHeader1.split(" ")[1];

  try {
    //verifile token
    const decodeJwt = jwt.verify(accessToken, process.env.SECRECT_JWT);
    if (decodeJwt) {
      const currentUser = await userModel.findOne({ account: idAccount });
      res.status(200).send(currentUser);
    }
  } catch (error) {
    //gửi mã lỗi về client để biết refresh token
    console.log(error);
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

module.exports = {
  getListUser: getListUser,
  getCurrentUser: getCurrentUser,
  getSuggestUser: getSuggestUser,
};
