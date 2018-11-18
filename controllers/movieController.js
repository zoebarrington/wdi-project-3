const Movie = require('../models/movie');


//zoe's code




//theo's code



//fred's code
function movieCreate(req, res, next){
  Movie
    .create(req.body)
    .then(movie => res.json(movie))
    .catch(next);
}

module.exports = {
  create: movieCreate
};
