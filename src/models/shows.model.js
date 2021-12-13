const mongoose = require("mongoose");

const showsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    movie_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie",
        required: true
      }
    ],
    total_seats: {type: Number, required: true},
    screen_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "screen",
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("show", showsSchema);
