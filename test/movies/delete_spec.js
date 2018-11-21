/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const { secret } = require('../../config/environment');

const Movie = require('../../models/movie');
const userIds = [
  '5bf17051d4a071297aa4b6ea'
];
const movieData = {
  createdBy: userIds [0],
  name: 'Love Actually',
  yearReleased: 2003,
  movieLength: '2h 15mins',
  image: 'https://img05.mgo-images.com/image/thumbnail?id=1MVef5d2891482420b274f1c5b6fa7803b9&ql=70&sizes=310x465',
  coverPhoto: 'https://images6.alphacoders.com/341/thumb-1920-341199.jpg',
  writers: 'Richard Curtis,',
  director: 'Richard Curtis',
  actors: 'Hugh Grant, Martine McCutcheon, Liam Neeson',
  synopsis: 'Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.',
  locationFilmed: 'London, Surrey, France',
  genres: 'Comedy, Romance',
  reviews: []
};

let token;
let movieId;


describe('Movie DELETE', () => {

  beforeEach(done => {
    Movie.remove({})
      .then(() => Movie.create(movieData))
      .then(movie => {
        movieId = movie._id;
      })
      .then(() => User.remove({}))
      .then(() => User.create({
        email: 'test',
        username: 'test',
        password: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
        done();
      });
  });
  it('should return a 401 response without a token', done => {
    api.delete(`/api/movies/${movieId}`)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 204 response', done => {
    api.delete(`/api/movies/${movieId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(movieData)
      .end((err, res) => {
        expect(res.status).to.eq(204);
        done();
      });
  });
});
