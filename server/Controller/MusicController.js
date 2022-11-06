const MusicModel = require("../Models/MusicModel")

//xử lý get list music
const getListMusic = async (req, res) => {
    try {
        const listMusic = await MusicModel.find()
        res.send(listMusic)
    } catch (error) {
        res.send(error)
    }
}

const getMusic = async (req, res) => {
    try {
        const name = req.params.name
        const music = await MusicModel.find({ name: name })
        res.send(music)
    } catch (error) {
        res.send(error)        
    }
}

module.exports = {
    getListMusic: getListMusic,
    getMusic: getMusic,
  };