const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema(
  {
    timing: { type: String, required: true },
    theater_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "theater",
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("screen", screenSchema);
