const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  coverPhoto: String,
  profilePicture: String,
  bio: String,
  email: String,
  password: String,
  followedBy: [{
    type: mongoose.Schema.ObjectId, ref: 'User'
  }]
});

userSchema.virtual('moviesReviewed', {
  ref: 'Movie',
  localField: '_id',
  foreignField: 'createdBy'
});

userSchema.set('toJSON', {
  virtuals: true
});

userSchema.pre('save', function() {
  this.password = bcrypt.hashSync(this.password, 8);
});

userSchema.methods.validatePassword = function(attemptedPassword) {
  return bcrypt.compareSync(attemptedPassword, this.password);
};

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
