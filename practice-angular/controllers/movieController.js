const Movie = require('../models/movie');

function indexRoute(req, res, next) {
  Movie.find().then(movie => res.json(movie))
    .catch(next);
}

//DO SAME FOR OTHER ROUTES + IN ROUTER 

module.exports = {
  index: indexRoute
};
