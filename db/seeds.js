const mongoose = require('mongoose');
const env = require('../config/environment');
const Movie = require('../models/movie');
const User = require('../models/user');
mongoose.connect(env.dbUri);

const userIds = [
  '5bf17051d4a071297aa4b6ea',
  '5bf17051d4a071297aa4b6eb',
  '5bf17051d4a071297aa4b6ec',
  '5bf17051d4a071297aa4b6ed',
  '5bf17051d4a071297aa4b6ee'
];



const userData = [
  {
    _id: userIds[0],
    username: 'freddie bell',
    email: 'fred@bell.com',
    password: 'pass',
    coverPhoto: 'https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?cs=srgb&dl=light-road-dawn-1146708.jpg&fm=jpg',
    profilePicture: 'http://media-ima002.globaltalentsystems.com/23671/600/23671_000-11-30-2016-12520.jpg',
    bio: 'Film enthusiast with excellent taste in motion pictures.',
    following: []

  }, {
    _id: userIds[1],
    username: 'theobirch',
    email: 'theo@birch.com',
    password: 'pass',
    coverPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRzrDa4xvGvNK9G0Smbk1TpdW6rFZHqOZqZxZwL6m_tEJrHph',
    profilePicture: 'https://images-na.ssl-images-amazon.com/images/I/C1euUan+TUS._CR0,0,3840,2880_._SL1000_.jpg',
    bio: 'Don’t follow me because I don’t even know where I’m going' ,
    following: []
  }, {
    _id: userIds[2],
    username: 'davidcomer',
    email: 'david@comer.com',
    password: 'pass',
    coverPhoto: 'https://m.media-amazon.com/images/M/MV5BMGU5OWEwZDItNmNkMC00NzZmLTk1YTctNzVhZTJjM2NlZTVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,677,1000_AL_.jpg',
    profilePicture: 'https://vignette.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png/revision/latest?cb=20180319061933',
    bio: 'Buoyant, waggish, efficacious, indefatigable, demiurgic, convivial marketing companion, self-made thousandaire',
    following: []
  }, {
    _id: userIds[3],
    username: 'zoebarrington',
    email: 'zoe@barrington.com',
    password: 'pass',
    coverPhoto: 'https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    profilePicture: 'https://png2.kisspng.com/20180517/piw/kisspng-jessie-j-pop-art-illustrator-pop-art-5afe40ddbbf299.1313525515266121897698.png',
    bio: 'A Caffeine dependent life-form',
    following: []
  }, {
    _id: userIds[4],
    username: 'albert',
    email: 'albert@birch.com',
    password: 'pass',
    coverPhoto: 'https://m.media-amazon.com/images/M/MV5BMGYxNjdjMTItMmUwYy00NzNhLTk1NjctZWVkZTMzZTYzNjBmXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SY1000_CR0,0,672,1000_AL_.jpg',
    profilePicture: 'https://media1.popsugar-assets.com/files/thumbor/EBrpTMRMGZFRRMnCqf3zUI9Gkx8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/08/12/721/n/1922243/ce6dbfc5_edit_img_image_14690959_1439396294_1/i/Pit-Bulls-Pajamas.jpg',
    bio: 'Canine fanatic. Lover of all animal based cinema.',
    following: []
  }
];

const movieData = [
  {
    createdBy: userIds [0],
    name: 'Love Actually',
    yearReleased: 2003,
    movieLength: '2h 15mins',
    image: 'https://img05.mgo-images.com/image/thumbnail?id=1MVef5d2891482420b274f1c5b6fa7803b9&ql=70&sizes=310x465',
    writers: ['Richard Curtis'],
    director: 'Richard Curtis',
    actors: ['Hugh Grant', 'Martine McCutcheon', 'Liam Neeson'],
    synopsis: 'Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.',
    locationFilmed: ['London', 'Surrey', 'France'],
    genres: ['Comedy', 'Romance'],
    reviews: []
  }, {
    createdBy: userIds[1],
    name: 'Blood Diamond',
    yearReleased: 2006,
    movieLength: '2h 23mins',
    image: 'https://www.warnerbros.com/sites/default/files/styles/key_art_270x400/public/blood_diamond_keyart.jpg?itok=Z6FdM7sH',
    writers: ['Charles Leavitt'],
    director: 'Edward Zwick',
    actors: ['Leonardo DiCaprio', 'Dijimon Hounsou', 'Jennifer Connelly'],
    synopsis: 'A story following Archer, a man tortured by his roots. With a strong survival instinct, he has made himself a key player in the business of conflict diamonds. Political unrest is rampant in Sierra Leone as people fight tooth for tooth. Upon meeting Solomon, and the beautiful Maddy, Archers life changes forever as he is given a chance to make peace with the war around him.',
    locationFilmed: ['South Africa', 'Mozambique'],
    genres: ['Adventure', 'Drama', 'Thriller'],
    reviews: []
  }, {
    createdBy: userIds[2],
    name: 'The Shawshank Redemption',
    yearReleased: 1994,
    movieLength: '2h 22mins',
    image: 'https://files.kstatecollegian.com/2015/06/c4728ae2-cf07-4ae6-af7e-34cf3cb38dbe.jpg',
    writers: ['Stephen King', 'Frank Darabont'],
    director: 'Frank Darabont',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    synopsis: 'Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the mans unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.',
    locationFilmed: ['Ohio', 'Virgin Islands'],
    genres: ['Drama'],
    reviews: []
  }, {
    createdBy: userIds[1],
    name: 'Ice Cold in Alex',
    yearReleased: 1958,
    movieLength: '2h 10mins',
    image: 'https://m.media-amazon.com/images/M/MV5BYzVhNmJkZDMtYzgwMC00MjY5LTlkNzUtNjNjYjI3ODIwOTFhXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SY1000_CR0,0,661,1000_AL_.jpg',
    writers: ['Christopher Landon', 'T.J. Morrison'],
    director: 'J. Lee Thompson',
    actors: ['John Mills', 'Sylvia Syms', 'Anthony Quayle', 'Harry Andrews', 'Diane Clare'],
    synopsis: 'Captain Anson (John Mills) is tired and thirsty. Forced to leave his North African post when it becomes clear it will be invaded, Anson is on his way to Alexandria, Egypt, and looking forward to a nice cold beer. Before he gets there, though, circumstances pressure him to take on several passengers. Sister Diana Murdoch (Sylvia Syms) and Captain van der Poel (Anthony Quayle) prove to be excellent traveling companions, but Anson soon realizes that one of them is a German spy.',
    locationFilmed: ['Tripoli', 'Hampshire'],
    genres: ['Drama'],
    reviews: []
  }, {
    createdBy: userIds[0],
    name: 'Mousehunt',
    yearReleased: 1997,
    movieLength: '1h 38mins',
    image: 'https://m.media-amazon.com/images/M/MV5BMzE0NTRhZWQtZmE5OS00NTI5LWJhMzMtMGU4MzE4MmRlZDE0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,678,1000_AL_.jpg',
    writers: ['Adam Rifkin'],
    director: 'Gore Verbinski',
    actors: ['Nathan Lane', 'Lee Evans'],
    synopsis: 'Two stumblebum inheritors are determined to rid their antique house of a mouse who is equally determined to stay where he is.',
    locationFilmed: ['Bass Lake, California'],
    genres: ['Comedy'],
    reviews: []
  }, {
    createdBy: userIds[3],
    name: 'Jaws',
    yearReleased: 1994,
    movieLength: '2h 4mins',
    image: 'https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX651_CR0,0,651,999_AL_.jpg',
    writers: ['Peter Benchley ', 'Carl Gottlieb '],
    director: 'Steven Spielberg',
    actors: ['Roy Scheider', 'Robert Shaw', 'Richard Dreyfuss'],
    synopsis: 'When a killer shark unleashes chaos on a beach resort, it is up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.',
    locationFilmed: ['Martha/s Vineyard, USA'],
    genres: ['Thriller'],
    reviews: []
  }, {
    createdBy: userIds[3],
    name: 'The Intouchables',
    yearReleased: 2011,
    movieLength: '1h 52mins',
    image: 'https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    writers: ['Philippe Pozzo di Borgo', 'Olivier Nakache'],
    director: 'Olivier Nakache',
    actors: ['François Cluzet', 'Omar Sy', 'Audrey Fleurot'],
    synopsis: 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.',
    locationFilmed: ['Paris, France'],
    genres: ['Drama'],
    reviews: []
  }, {
    createdBy: userIds[0],
    name: 'Spring Breakers',
    yearReleased: 2013,
    movieLength: '1h 34mins',
    image: 'https://m.media-amazon.com/images/M/MV5BNDBmYjU3NzAtZGVkNS00N2E3LWEyNTgtMjIwMTczYTE0M2Y4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg',
    writers: ['Harmony Korine'],
    director: 'Harmony Korine',
    actors: ['James Franco', '	Selena Gomez', 'Vanessa Hudgens', 'Ashley Benson'],
    synopsis: 'Four college girls hold up a restaurant in order to fund their spring break vacation. While partying, drinking, and taking drugs, they are arrested, only to be bailed out by a drug and arms dealer. ',
    locationFilmed: ['Florida, USA'],
    genres: ['Crime'],
    reviews: []
  }
];

Movie.collection.drop();
User.collection.drop();

Movie.create(movieData)
  .then(movies => {
    console.log(`created' ${movies.length} movies!`);
    User.create(userData)
      .then(users => {
        console.log(`Created ${users.length} user`);
        mongoose.connection.close();
      });
  });
