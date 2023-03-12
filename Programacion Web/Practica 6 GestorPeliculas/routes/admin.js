const express = require("express");

const router = express.Router();

const adminController = require("../controllers/AdminController");

router.get("/movies-add", adminController.GetAddMovie);
router.post("/movies-add", adminController.PostAddMovie)
router.get("/movies-list", adminController.GetListMovies);
router.get("/movie-edit/:movieId", adminController.GetEditMovie);
router.post("/movie-edit", adminController.PostEditMovie);
router.post("/movie-delete", adminController.DeleteMovie);

module.exports = router;