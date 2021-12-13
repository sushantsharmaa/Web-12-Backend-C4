const express = require("express");

const Movie = require("../models/movies.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try{
    const movies = await Movie.create(req.body);
    return res.status(201).json(movies);
  } catch {
    return res.status(500).json({message:e.message, status: "failed"});
  }
})
