const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  name: String,
  yearReleased: Number,
  movieLength: String,
  image: String,
  writers: String,
  director: String,
  actors: [String],
  synopsis: String,
  locationFilmed: String,
  genres: [String],
  reviews: {
    //embedded schemas of comments inside the reviews
    title: String,
    rating: Number (1-5),
    content: String,
    createdBy: referenced user, 
    likedBy: [referenced users],
    date: String,

  },
  averageRatings: Number,
  createdBy: {
    //who created the movie
    // referencing users
  }
});

const movieModel = mongoose.model('Model', movieSchema);
module.exports = movieModel;
