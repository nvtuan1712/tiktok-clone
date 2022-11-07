const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

VideoSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

VideoSchema.set("toJSON", {
  virtuals: true,
});

//compiler
const VideoModel = mongoose.model("Video", VideoSchema);
module.exports = VideoModel;
