const AccountModel = require("../Models/AccountModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/UserModel");


//xử lý đăng ký
const register = async (req, res) => {
  try {
    //get info from client to req.body
    const { email, password, phone, birthday, role } = req.body;
    //creat data to db
    const accountModel = new AccountModel({
      email: email,
      password: bcrypt.hashSync(password, 10),
      phone: phone,
      birthday: birthday,
      role: role,
    });
    await accountModel.save();
    const account = await accountModel.save();
    
    const user = new UserModel({
      account: account._id ,
      avatar: '',
      nickname: `user${phone}`,
      name: '',
      follower_count: 0,
      following_count: 0,
      heart_count: 0,
      description: '',
      tick: false,
    })
    await user.save();

    return res.status(200).send("register acount");
  } catch (error) {
    console.log("error", error);
  }
};


//xử lý đăng nhập
const login = async (req, res) => {
  //check email
  const account = await AccountModel.findOne({ email: req.body.email });
  if (!account) {
    return res.status(400).send("Invalid Email Or Password");
  }

  //check pass
  const isPassValid = bcrypt.compareSync(req.body.password, account.password);
  if (!isPassValid) {
    return res.status(400).send("Invalid Email Or Password");
  }

  const jwtToken = jwt.sign(
    {
      _id: account.id,
      email: account.email,
      role: account.role,
    },
    process.env.SECRECT_JWT,
    {
      expiresIn: 3600,
    }
  );

  return res.status(200).send({
    accessToken: jwtToken,
    _idAccount: account.id,
  });
};


//xử lý đăng xuất

module.exports = {
  register: register,
  login: login,
};
