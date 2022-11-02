const jwt = require('jsonwebtoken')
const accountModel = require('../Models/AccountModel')

//lấy danh sách account
const getListAccount = async (req, res) => {
    const listAccount = await accountModel.find();
    res.status(200).send(listAccount)
}

module.exports = {
    getListAccount: getListAccount,
}