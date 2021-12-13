const mongoose = require("mongoose");

const seatsSchema = new mongoose.Schema(
  {
    show_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "show",
        required: true
      }
    ]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("seat", seatsSchema);
