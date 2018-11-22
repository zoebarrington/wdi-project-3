const User = require('../models/user');
const jwt = require('jsonwebtoken');
const env = require('../config/environment');



describe('register route', () => {

  beforeEach(done => {
    User.remove({})
    .then(() => User.create)
  })
})
