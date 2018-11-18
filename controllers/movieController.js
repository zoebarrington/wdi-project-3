const Movie = require('../models/movie');


//zoe's code
function indexRoute(req, res, next) {
  Movie.find().then(movies => res.json(movies))
    .catch(next);
}



//theo's code



//fred's code


module.exports = {
  index: indexRoute
};
