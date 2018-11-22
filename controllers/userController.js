const User = require('../models/user');

function showRoute(req, res, next) {
  User.findById(req.params.id)
    .populate('moviesReviewed moviesSpotted')
    .select('-password')
    .then(user => {
      res.json(user);
    })
    .catch(next);
}

function updateProfileRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

function userIndexRoute(req, res, next) {
  User.find()
    .populate('moviesReviewed')
    .select('-password')
    .then(users => res.json(users))
    .catch(next);
}


module.exports = {
  show: showRoute,
  updateFollowers: updateProfileRoute,
  feed: userIndexRoute
};
