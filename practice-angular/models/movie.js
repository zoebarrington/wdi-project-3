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
  reviews: {
    //embedded schemas of comments inside the reviews
  },
  averageRatings: Number,
  createdBy: {
    //who created the movie
  }
});

const movieModel = mongoose.model('Model', movieSchema);
module.exports = movieModel;
