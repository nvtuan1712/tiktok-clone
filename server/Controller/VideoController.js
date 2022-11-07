const multer = require("multer");
const imageFilter = require("../Helpers/imageFilter");
const videoModel = require("../Models/VideoModel");

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var storageVideo = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/video");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({
  storage: storage,
}).single("myFile");

var uploadVideo = multer({
  storage: storageVideo,
}).single("myFileVideo");

const uploadImage = async (req, res) => {
  try {
    upload(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const newVideo = new videoModel({
          thumbnail: `http://localhost:5000/${req.file.destination}/${req.file.filename}`,
          // video: `http://localhost:5000/${req.file.destination}/${req.file.filename}`
        });
        newVideo
          .save()
          .then(() => res.send("success upload"))
          .catch((err) => console.log(err));
      }
    });
  } catch (error) {}
};

module.exports = {
  uploadImage: uploadImage,
};
