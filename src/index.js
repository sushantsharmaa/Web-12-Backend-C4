const express = require("express");

const moviesController = require("./controllers/movies.controller");
const showsController = require("./controllers/shows.controller");
const seatsController = require("./controllers/seats.controller");

const app = express();

app.use(express.json());

app.use("/movies", moviesController);
app.use("/shows", showsController);
app.use("/seats", seatsController);

module.exports = app;
