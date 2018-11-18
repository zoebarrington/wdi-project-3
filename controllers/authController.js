const User = require('../models/user');
const jwt = require('jsonwebtoken');
const env = require('../config/environment');

// Register route
function register(req, res, next) {
  User.create(req.body)
    .then(user => res.json({
      message: `Welcome ${user.username}`
    }))
    .catch(next);
}

// Login route including the token
function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user && user.validatePassword(req.body.password)) {
        const token = jwt.sign({
          username: user.username,
          sub: user._id
        }, env.secret, { expiresIn: '2 weeks' });
        res.json({
          message: `Welcome back ${user.username}`,
          token: token
        });
      } else {
        res.status(401).json({
          message: 'You shall not pass'
        });
      }
    })
    .catch(next);
}

module.exports = {
  register: register,
  login: login
};
