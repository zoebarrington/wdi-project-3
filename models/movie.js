const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  name: String,
  yearReleased: Number,
  movieLength: String,
  image: String,
  writers: [String],
  director: String,
  actors: [String],
  synopsis: String,
  locationFilmed: [String],
  genres: [String],
  reviews: [{
    title: String,
    rating: Number,
    content: String,
    createdBy: {
      type: mongoose.Schema.ObjectId, ref: 'User'
    },
    likedBy: [{
      type: mongoose.Schema.ObjectId, ref: 'User'
    }],
    time: { type: Date, default: Date.now }
  }],
  averageRatings: Number,
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

const movieModel = mongoose.model('Movie', movieSchema);
module.exports = movieModel;
