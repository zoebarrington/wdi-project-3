const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profilePicture: String,
  bio: String,
  friends: [{
    id: string,
    status: string,
  }]
  moviesReviewed: [String]
};


const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
