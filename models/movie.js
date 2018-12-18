const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  name: String,
  yearReleased: Number,
  movieLength: String,
  image: String,
  coverPhoto: String,
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
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

movieSchema.virtual('averageRating')
  .get(function(){
    let total = 0;
    const numberOfReviews = this.reviews.length;
    for(let i = 0; i < numberOfReviews; i++){
      total = total + this.reviews[i].rating;
    }
    return total / numberOfReviews;
  });

movieSchema.set('toJSON', {
  virtuals: true
});

const movieModel = mongoose.model('Movie', movieSchema);
module.exports = movieModel;
