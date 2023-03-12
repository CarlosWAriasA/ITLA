const MovieModel = require("../models/Movie");

exports.GetAddMovie = (request, response, next) => {
  response.render("admin/movies-add", {
    AddMoviesActive: true
  });
}

exports.PostAddMovie = (req, res, next) => {
  const nombre = req.body.Name;
  const imagen = req.body.Image;
  const descripcion = req.body.Description;
  const genero = req.body.Genre;

  const movie = new MovieModel(null, nombre, imagen, descripcion, genero, "active");
  movie.Save();

  res.redirect("/movies/movies-list");
};

exports.GetListMovies = (request, response, next) => {
  MovieModel.GetAll(function (movies) {
    response.render("admin/movies-list", {
      movs: movies,
      hasMovies: movies.length > 0,
      ListMoviesActive: true,
    })
  })
}

exports.GetEditMovie = (req, res, next) => {
  const movieId = parseInt(req.params.movieId);
  const edit = req.query.edit;

  if (!edit) {
    return res.redirect("/admin/movies-list");
  }

  MovieModel.GetById(movieId, (movie) => {
    res.render("admin/movies-add", {
      editMode: edit,
      mov: movie,
      ListMoviesActive: true,
    });
  });
};

exports.PostEditMovie = (req, res, next) => {
  const nombre = req.body.Name;
  const imagen = req.body.Image;
  const descripcion = req.body.Description;
  const genero = req.body.Genre;
  const id = parseInt(req.body.MovieID);
  const status = req.body.Status;

  const movie = new MovieModel(id, nombre, imagen, descripcion, genero, status);
  movie.Save();

  res.redirect("/admin/movies-list");
};

exports.DeleteMovie = (req, res, next) => {
  const id = parseInt(req.body.MovieID);
  MovieModel.Delete(id)

  res.redirect("/admin/movies-list");
};

