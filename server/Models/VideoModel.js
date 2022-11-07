const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  thumbnail: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  music: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Music",
  },
  trendy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag",
  },
  description: {
    type: String,
  },
  video: {
    type: String,
  },
  heart_count: {
    type: Number,
  },
  comment_count: {
    type: Number,
  },
  share_count: {
    type: Number,
  },
  isPrivate: {
    type: Boolean,
  },
  comment: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Comment',
  }],
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
