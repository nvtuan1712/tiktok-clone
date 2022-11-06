const TagModel = require("../Models/TagModel")

//xử lý get list tag trendy
const getListTrendy = async (req, res) => {
    try {
        const listTrendy = await TagModel.find()
        res.send(listTrendy)
    } catch (error) {
        res.send(error)
    }
}

const getTrendy = async (req, res) => {
    try {
        const name = req.params.name
        const trendy = await TagModel.find({ name: name })
        res.send(trendy)
    } catch (error) {
        res.send(error)        
    }
}

module.exports = {
    getListTrendy: getListTrendy,
    getTrendy: getTrendy,
  };
