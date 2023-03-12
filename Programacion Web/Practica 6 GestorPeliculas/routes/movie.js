const express = require("express");

const router = express.Router();
const movieController = require("../controllers/MovieController");

router.get("/", movieController.GetIndex);
router.get("/movies/movies-list", movieController.GetMovies);
router.get("/movies/movies-list/action", movieController.GetMoviesAction);
router.get("/movies/movies-list/comedy", movieController.GetMoviesComedy);
router.get("/movies/movies-list/documentary", movieController.GetMoviesDocumentary);
router.get("/movies/movies-list/suspense", movieController.GetMoviesSuspense);
router.get("/movies/movies-list/terror", movieController.GetMoviesTerror);

module.exports = router;