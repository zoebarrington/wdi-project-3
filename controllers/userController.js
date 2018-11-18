const User = require('../models/user');

function showRoute(req, res, next) {
  User.findByIdr(req.params.id)
    .populate('moviesCreated')
    .select('-password')
    .then(user => {
      res.json(user);
    })
    .catch(next);
}

module.exports = {
  show: showRoute
};
