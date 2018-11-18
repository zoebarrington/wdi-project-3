const Movie = require('../models/whiskey');


//zoe's code




//theo's code
function movieShow(req, res, next) {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(next);
}

//fred's code


module.exports = {
  show: movieShow
};
