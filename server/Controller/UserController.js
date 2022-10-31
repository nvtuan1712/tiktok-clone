const jwt = require('jsonwebtoken')
const userModel = require('../Models/UserModel')
const getListUser = async (req, res) => {
    //1.get token form client
    const bearerHeader = req.headers['authorization']
    const accessToken = bearerHeader.split(' ')[1]

    try {
        //verifile token
        const  decodeJwt = jwt.verify(accessToken, process.env.SECRECT_JWT)
        if(decodeJwt) {
            const listUser = await userModel.find();
            res.status(200).send(listUser)
        }
    } catch (error) {
        //gửi mã lỗi về client để biết refresh token
        console.log(error);
    }
}

module.exports = {
    getListUser: getListUser,
}