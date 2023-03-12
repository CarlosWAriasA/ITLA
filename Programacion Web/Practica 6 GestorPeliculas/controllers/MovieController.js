const MovieModel = require("../models/Movie");

exports.GetIndex = (request, response, next) => {
  response.render("movies/index", {});
}

exports.GetMovies = (request, response, next) => {
  MovieModel.GetAll(function (movies) {
    response.render("movies/movies-list", {
      movs: movies,
      hasMovies: movies.length > 0,
      MoviesActive: true,
    })
  })
}

exports.GetMoviesAction = (request, response, next) => {
  MovieModel.GetAll(function (movies) {
    response.render("movies/filters/movies-list-action", {
      movs: movies,
      hasMovies: movies.length > 0,
      FilterActive: true
    })
  })
}

exports.GetMoviesComedy = (request, response, next) => {
  MovieModel.GetAll(function (movies) {
    response.render("movies/filters/movies-list-comedy", {
      movs: movies,
      hasMovies: movies.length > 0,
      FilterActive: true
    })
  })
}

exports.GetMoviesDocumentary = (request, response, next) => {
  MovieModel.GetAll(function (movies) {
    response.render("movies/filters/movies-list-documentary", {
      movs: movies,
      hasMovies: movies.length > 0,
      FilterActive: true
    })
  })
}

exports.GetMoviesSuspense = (request, response, next) => {
  MovieModel.GetAll(function (movies) {
    response.render("movies/filters/movies-list-suspense", {
      movs: movies,
      hasMovies: movies.length > 0,
      FilterActive: true
    })
  })
}

exports.GetMoviesTerror = (request, response, next) => {
  MovieModel.GetAll(function (movies) {
    response.render("movies/filters/movies-list-terror", {
      movs: movies,
      hasMovies: movies.length > 0,
      FilterActive: true
    })
  })
}