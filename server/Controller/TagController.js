const TagModel = require("../Models/TagModel");
const videoModel = require("../Models/VideoModel");

//xử lý get list tag trendy
const getListTrendy = async (req, res) => {
  try {
    const listTrendy = await TagModel.find();
    res.send(listTrendy);
  } catch (error) {
    res.send(error);
  }
};

//xử lý get list tag trendy theo params
const getListTrendyUpload = async (req, res) => {
  try {
    if (req.query.q !== "") {
      const char = req.query.q;
      const listTrendy = await TagModel.find({
        name: { $regex: "^" + char, $options: "i" },
      });
      res.send(listTrendy);
    } else {
      res.send("No character");
    }
  } catch (error) {
    res.send(error);
  }
};

const getTrendy = async (req, res) => {
  try {
    const name = req.params.name;
    const trendyv1 = await TagModel.findOne({ name: name });
    const listVideo = await videoModel.find({ trendy: trendyv1._id })
    let viewcount = 0
    listVideo.forEach((item) => {
      viewcount += item.watch_count
    })
    await TagModel.updateOne(
      { name: name },
      { $set: { watch_count: viewcount } }
    )

    const trendy = await TagModel.find({ name: name })
    res.send(trendy);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getListTrendy: getListTrendy,
  getTrendy: getTrendy,
  getListTrendyUpload: getListTrendyUpload,
};
