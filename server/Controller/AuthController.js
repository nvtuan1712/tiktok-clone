const userModel = require("../Models/UserModel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  try {
    //get info from client to req.body
    const { email, password, phone, birthday, role } = req.body;
    //creat data to db
    await userModel.create({
      email: email,
      password: bcrypt.hashSync(password, 10),
      phone: phone,
      birthday: birthday,
      role: role,
    });
    return res.status(200).send("register user");
  } catch (error) {
    console.log('error', error);
  }
};

const login = async (req, res) => {
    //check email
    const user = await userModel.findOne({email: req.body.email})
    if(!user) {
        return res.status(400).send('Invalid Email Or Password')
    }

    //check pass
    const isPassValid = bcrypt.compareSync(req.body.password, user.password)
    if(!isPassValid) {
        return res.status(400).send('Invalid Email Or Password')
    }

    const jwtToken = jwt.sign({
        _id: user.id,
        email: user.email,
        role: user.role
    }, process.env.SECRECT_JWT, {
        expiresIn: 3600
    })

    return res.status(200).send({
      accessToken: jwtToken,
    })

}

module.exports = {
  register: register,
  login: login,
};
