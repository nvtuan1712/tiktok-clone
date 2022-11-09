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

//xử lý get list tag trendy theo params
const getListMusicUpload = async (req, res) => {
    try {
      console.log(req.query);
    if (req.query.q !== "") {
      const char = req.query.q;
      const listMusic = await MusicModel.find({
        name: { $regex: "^" + char, $options: "i" },
      });
      res.send(listMusic);
    } else {
      res.send("No character");
    }
    } catch (error) {
      res.send(error);
    }
  };

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
    getListMusicUpload: getListMusicUpload,
  };