const Movie = require('../models/movie');

function createRoute(req, res, next) {
  Movie.findById(req.params.movieId)
    .then(movie => {
      req.body.user = req.tokenUserId;
      movie.reviews.push(req.body);
      return movie.save();
    })
    .then(movie => Movie.populate(movie, 'createdBy reviews.createdBy'))
    .then(movie => res.json(movie))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Movie.findById(req.params.movieId)
    .then(movie => {
      const review = movie.reviews.id(req.params.reviewId);
      review.remove();
      return movie.save();
    })
    .then(movie => Movie.populate(movie, 'createdBy reviews.createdBy'))
    .then(movie => res.json(movie))
    .catch(next);
}

function updateRoute(req, res, next){
  Movie.findById(req.params.movieId)
    .then(movie => {
      const review = movie.reviews.id(req.params.reviewId);
      review.set(req.body);
      return movie.save();
    })
    .then(movie => Movie.populate(movie, 'createdBy reviews.createdBy'))
    .then(movie => res.json(movie))
    .catch(next);
}

module.exports = {
  create: createRoute,
  delete: deleteRoute,
  update: updateRoute
};
