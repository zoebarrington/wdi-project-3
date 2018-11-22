/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');

const userIds = [
  '5bf17051d4a071297aa4b6ea'
];

let user;

const userData =
  {
    _id: userIds [0],
    username: 'freddie bell',
    email: 'fred@bell.com',
    password: 'pass',
    coverPhoto: 'https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?cs=srgb&dl=light-road-dawn-1146708.jpg&fm=jpg',
    profilePicture: 'http://media-ima002.globaltalentsystems.com/23671/600/23671_000-11-30-2016-12520.jpg',
    bio: 'Film enthusiast with excellent taste in motion pictures.'
  };

describe('user REGISTER', () => {

  beforeEach(done => {
    User
      .remove({})
      .then(() => User.create(userData))
      .then(_user => {
        user = _user;
        done();
      });
  });


  it('should return an object', done => {
    api.post('/api/register')
      .send(userData)
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });

// it('should return a 401 response without a token', done => {
//   api.post('/api/register')
//     .end((err, res) => {
//       expect(res.status).to.eq(401);
//       done();
//     });
// });

// it('should return a 200 response with a token', done => {
//   api.post('/api/login')
//     .set('Authorization', `Bearer ${token}`)
//     .send(userData)
//     .end((err, res) => {
//       console.log('token ==>', token);
//       expect(res.status).to.eq(200);
//       done();
//     });
// });

  it('should return the correct message', done => {
    api.post('/api/login')
      .send(userData)
      .end((err, res) => {
        expect(res.body.message).to.eq(`Welcome back ${userData.username}`);
        done();
      });
  });
});
