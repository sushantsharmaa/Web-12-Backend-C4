const express = require("express");

const Seat = require("../models/seats.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try{
    const seats = await Show.find().lean().exec();
    return res.status(201).json(seats);
  } catch {
    return res.status(500).json({message:e.message, status: "failed"});
  }
});
