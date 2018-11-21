const User = require('../models/user');

function showRoute(req, res, next) {
  User.findById(req.params.id)
    .populate('moviesCreated')
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

module.exports = {
  show: showRoute,
  updateFollowers: updateProfileRoute
};
