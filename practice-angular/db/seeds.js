const mongoose = require('mongoose');
const env = require('../config/environment');
const Movie = require('../models/movie');
const User = require('../models/user');
mongoose.connect(env.dbUri);

const userIds = [
  {

  }
]
const userData = [
  {
    username: String,
    email: String,
    password: String,
    profilePicture: String,
    bio: String,
    following: [ARRAY OF USERS!!!]
    moviesReviewed: [String]
  }
]

const movieData = [
  {
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
      //FILL IN ACTUAL DATA
  }
];

Movie.collection.drop();
User.collection.drop();
