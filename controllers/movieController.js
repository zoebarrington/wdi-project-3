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


module.exports = {
  show: movieShow,
  index: movieIndex

};
