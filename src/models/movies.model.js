const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    actor: [],
    language: [],
    directors: [],
    poster_url: {type: String}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("movie", movieSchema);
