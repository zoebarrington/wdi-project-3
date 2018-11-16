const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
const Movie = require('../models/movie');

const movieData = [
  {
    name: 'Love Actually',
    yearReleased: 2003,
    movieLength: '2h 15mins',
    image: 'https://img05.mgo-images.com/image/thumbnail?id=1MVef5d2891482420b274f1c5b6fa7803b9&ql=70&sizes=310x465',
    writers: ['Richard Curtis'],
    director: 'Richard Curtis',
    actors: ['Hugh Grant', 'Martine McCutcheon', 'Liam Neeson'],
    synopsis: 'Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.',
    locationFilmed: ['London', 'Surrey', 'France'],
    genres: ['Comedy', 'Romance']
  }, {
    name: 'Blood Diamond',
    yearReleased: 2006,
    movieLength: '2h 23mins',
    image: 'https://www.warnerbros.com/sites/default/files/styles/key_art_270x400/public/blood_diamond_keyart.jpg?itok=Z6FdM7sH',
    writers: ['Charles Leavitt'],
    director: 'Edward Zwick',
    actors: ['Leonardo DiCaprio', 'Dijimon Hounsou', 'Jennifer Connelly'],
    synopsis: 'A story following Archer, a man tortured by his roots. With a strong survival instinct, he has made himself a key player in the business of conflict diamonds. Political unrest is rampant in Sierra Leone as people fight tooth for tooth. Upon meeting Solomon, and the beautiful Maddy, Archers life changes forever as he is given a chance to make peace with the war around him.',
    locationFilmed: ['South Africa', 'Mozambique'],
    genres: ['Adventure', 'Drama', 'Thriller']
  }, {
    name: 'The Shawshank Redemption',
    yearReleased: 1994,
    movieLength: '2h 22mins',
    image: 'https://files.kstatecollegian.com/2015/06/c4728ae2-cf07-4ae6-af7e-34cf3cb38dbe.jpg',
    writers: ['Stephen King', 'Frank Darabont'],
    director: 'Frank Darabont',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    synopsis: 'Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the mans unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.',
    locationFilmed: ['Ohio', 'Virgin Islands'],
    genres: ['Drama']
  }
];

Movie.collection.drop();

Movie.create(movieData)
  .then(movies => {
    console.log(`created' ${movies.length} movies!`);
    mongoose.connection.close();
  });
