const multer = require("multer");
const imageFilter = require("../Helpers/imageFilter");
const videoModel = require("../Models/VideoModel");

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/video");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({
  storage: storage,
}).single("myVideo");


const uploadImage = async (req, res) => {
  // console.log(req);
  try {
    upload(req, res, (err) => {
      console.log(req);
      if (err) {
        console.log(err);
      } else {
        console.log(req);
        let private = false
        if(req.body.selection === 'Riêng tư') {
          private = true
        }
        const newVideo = new videoModel({ 
          description: req.body.description,
          trendy: req.body.trendy, 
          music: req.body.music,
          isPrivate: private,
          video: `http://localhost:5000/public/video/${req.file.filename}`,
          heart_count: 0,
          share_count: 0,
          comment_count: 0,
          author: req.body.author,
        });
        newVideo
          .save()
          .then(() => res.send('Upload Success!'))
          .catch((err) => console.log(err));
      }
    });
  } catch (error) {}
};

module.exports = {
  uploadImage: uploadImage,
};
