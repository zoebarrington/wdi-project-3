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

module.exports = {
  create: movieCreate,
  show: movieShow,
  index: movieIndex
};
