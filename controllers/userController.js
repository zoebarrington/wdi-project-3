const User = require('../models/user');

function showRoute(req, res, next) {
  User.findById(req.params.id)
    .populate('moviesReviewed')
    .select('-password')
    .then(user => {
      res.json(user);
    })
    .catch(next);
}

module.exports = {
  show: showRoute
};
