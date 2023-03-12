const fs = require("fs");
const path = require("path");

const dataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "movies.json"
);

const GetAllMoviesFromFile = function (callBack) {
  fs.readFile(dataPath, function (error, data) {
    if (error) {
      callBack([]);
    } else {
      callBack(JSON.parse(data));
    }
  });
};

const GenerateRandomID = function () {
  return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
}

function GenerarID(cb) {
  GetAllMoviesFromFile((movies) => {
    let newId = GenerateRandomID();
    while (movies.some(movie => movie.id === newId)) {
      newId = GenerateRandomID();
    }
    cb(newId);
  });
};

module.exports = class Movie {
  constructor(id, name, imageUrl, description, genre, status) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.genre = genre;
    this.status = status;
  }

  Save() {
    GetAllMoviesFromFile((movies) => {
      if (this.id) {
        const editMovieIndex = movies.findIndex(
          (prod) => prod.id === this.id
        );

        movies[editMovieIndex] = this;
        fs.writeFile(dataPath, JSON.stringify(movies), function (error) {
          console.log(error);
        });
      } else {
        GenerarID(id => {
          this.id = id;
          movies.push(this);
          fs.writeFile(dataPath, JSON.stringify(movies), function (error) {
            if (error) {
              console.log(error);
            }
          });
        });
      }
    });
  }

  static GetAll(cb) {
    GetAllMoviesFromFile(cb);
  }

  static GetById(id, cb) {
    GetAllMoviesFromFile((movies) => {
      const movie = movies.find((p) => p.id === id);
      cb(movie);
    });
  }

  static Delete(id) {
    GetAllMoviesFromFile((movies) => {
      // const movie = movies.find((p) => p.id === id);

      const newNMoviesList = movies.filter((movie) => movie.id !== id);

      fs.writeFile(dataPath, JSON.stringify(newNMoviesList), function (error) {
        console.log(error);
      });
    });
  }
}