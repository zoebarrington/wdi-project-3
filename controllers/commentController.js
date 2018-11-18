const Movie = require('../models/movie');

function createRoute(req, res next) {
  Movie.findById(req.params.movieId)
  .then(movie => {
    req.body
  })
}
