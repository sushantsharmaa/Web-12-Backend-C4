const express = require("express");

const Show = require("../models/shows.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try{
    const shows = await Show.find().lean().exec();
    return res.status(201).json(shows);
  } catch {
    return res.status(500).json({message:e.message, status: "failed"});
  }
});
