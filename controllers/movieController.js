const Movie = require('../models/movie');


//zoe's code
function movieIndex(req, res, next) {
  Movie.find().then(movies => res.json(movies))
    .catch(next);
}

//theo's code
function movieShow(req, res, next) {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(next);
}

//fred's code
function movieCreate(req, res, next){
  Movie
    .create(req.body)
    .then(movie => res.json(movie))
    .catch(next);
}

//update route
function movieUpdate(req, res, next) {
  Movie.FindById(req.params.id)
    .then(movie => movie.set(req.body))
    .then(movie => movie.save())
    .then(movie => res.json(movie))
    .catch(next);
}

//delete
function deleteRoute(req, res, next) {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  create: movieCreate,
  show: movieShow,
  index: movieIndex,
  update: movieUpdate,
  delete: deleteRoute
};
