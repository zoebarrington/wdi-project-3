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
    bio: 'Film enthusiast with excellent taste in motion pictures.'
  }, {
    _id: userIds[1],
    username: 'theobirch',
    email: 'theo@birch.com',
    password: 'pass',
    coverPhoto: 'http://getwallpapers.com/wallpaper/full/5/f/4/593520.jpg',
    profilePicture: 'https://images-na.ssl-images-amazon.com/images/I/C1euUan+TUS._CR0,0,3840,2880_._SL1000_.jpg',
    bio: 'Don’t follow me because I don’t even know where I’m going'
  }, {
    _id: userIds[2],
    username: 'davidcomer',
    email: 'david@comer.com',
    password: 'pass',
    coverPhoto: 'https://m.media-amazon.com/images/M/MV5BMGU5OWEwZDItNmNkMC00NzZmLTk1YTctNzVhZTJjM2NlZTVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,677,1000_AL_.jpg',
    profilePicture: 'https://vignette.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png/revision/latest?cb=20180319061933',
    bio: 'Buoyant, waggish, efficacious, indefatigable, demiurgic, convivial marketing companion, self-made thousandaire'
  }, {
    _id: userIds[3],
    username: 'zoebarrington',
    email: 'zoe@barrington.com',
    password: 'pass',
    coverPhoto: 'http://www.smartgastraining.co.uk/wp-content/uploads/2017/05/cover-2.jpg',
    profilePicture: 'https://png2.kisspng.com/20180517/piw/kisspng-jessie-j-pop-art-illustrator-pop-art-5afe40ddbbf299.1313525515266121897698.png',
    bio: 'A Caffeine dependent life-form'
  }, {
    _id: userIds[4],
    username: 'albert',
    email: 'albert@birch.com',
    password: 'pass',
    coverPhoto: 'https://m.media-amazon.com/images/M/MV5BMGYxNjdjMTItMmUwYy00NzNhLTk1NjctZWVkZTMzZTYzNjBmXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SY1000_CR0,0,672,1000_AL_.jpg',
    profilePicture: 'https://media1.popsugar-assets.com/files/thumbor/EBrpTMRMGZFRRMnCqf3zUI9Gkx8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/08/12/721/n/1922243/ce6dbfc5_edit_img_image_14690959_1439396294_1/i/Pit-Bulls-Pajamas.jpg',
    bio: 'Canine fanatic. Lover of all animal based cinema.'
  }
];

const movieData = [
  {
    createdBy: userIds [0],
    name: 'Love Actually',
    yearReleased: 2003,
    movieLength: '2h 15mins',
    image: 'https://img05.mgo-images.com/image/thumbnail?id=1MVef5d2891482420b274f1c5b6fa7803b9&ql=70&sizes=310x465',
    coverPhoto: 'https://images6.alphacoders.com/341/thumb-1920-341199.jpg',
    writers: ['Richard Curtis'],
    director: 'Richard Curtis',
    actors: ['Hugh Grant', 'Martine McCutcheon', 'Liam Neeson'],
    synopsis: 'Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.',
    locationFilmed: ['London', 'Surrey', 'France'],
    genres: ['Comedy', 'Romance'],
    reviews: [{
      title: 'A let down',
      rating: 2,
      content: 'Love? Actually, no. More like disappointment, and, at times, hatred. I wanted so much to love Richard Curtiss directorial debut, expected to love it too. Yet, even though its makers would have us believe were curmudgeons if we dont grin and lap up the film, it really is a stale and contrived let-down.',
      createdBy: userIds [0]
    }]
  }, {
    createdBy: userIds[1],
    name: 'Blood Diamond',
    yearReleased: 2006,
    movieLength: '2h 23mins',
    image: 'https://www.warnerbros.com/sites/default/files/styles/key_art_270x400/public/blood_diamond_keyart.jpg?itok=Z6FdM7sH',
    coverPhoto: 'https://stmed.net/sites/default/files/blood-diamond-wallpapers-29433-1738823.jpg',
    writers: ['Charles Leavitt'],
    director: 'Edward Zwick',
    actors: ['Leonardo DiCaprio', 'Dijimon Hounsou', 'Jennifer Connelly'],
    synopsis: 'A story following Archer, a man tortured by his roots. With a strong survival instinct, he has made himself a key player in the business of conflict diamonds. Political unrest is rampant in Sierra Leone as people fight tooth for tooth. Upon meeting Solomon, and the beautiful Maddy, Archers life changes forever as he is given a chance to make peace with the war around him.',
    locationFilmed: ['South Africa', 'Mozambique'],
    genres: ['Adventure', 'Drama', 'Thriller', 'Action'],
    reviews: [{
      title: 'Surprisingly Intense',
      rating: 4,
      content: 'Blood Diamond is a surprisingly intense and informative movie that the general public needs to see. Yet, the box office viewing is evidence of what America does to Africa on a general level (turning a blind eye) that its no surprise it never earned a #1 spot. Still, I believe it to be one of the best movies Ive seen this year. Leonardo DiCaprio, similar to his performance in The Departed, is believable, strong, and convincing. The story is strong; the cinematography is excellent; and overall, Blood Diamond does everything I want a movie to do (to educate, captivate, and be enjoyable.',
      createdBy: userIds [0]
    }]
  }, {
    createdBy: userIds[2],
    name: 'The Shawshank Redemption',
    yearReleased: 1994,
    movieLength: '2h 22mins',
    coverPhoto: 'https://i.imgur.com/IOs6kPE.jpg?1',
    image: 'https://files.kstatecollegian.com/2015/06/c4728ae2-cf07-4ae6-af7e-34cf3cb38dbe.jpg',
    writers: ['Stephen King', 'Frank Darabont'],
    director: 'Frank Darabont',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    synopsis: 'Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the mans unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.',
    locationFilmed: ['Ohio', 'Virgin Islands'],
    genres: ['Drama'],
    reviews: [{
      title: 'Resonates',
      rating: 5,
      content: 'This is a movie that stands the test of time and still resonates with viewers. Call this the Stand by Me of prison stories.',
      createdBy: userIds [0]
    }]
  }, {
    createdBy: userIds[1],
    name: 'Ice Cold in Alex',
    yearReleased: 1958,
    movieLength: '2h 10mins',
    coverPhoto: 'http://2.bp.blogspot.com/-nEFT8a1CzAQ/TgZxyMS9bSI/AAAAAAAAAqY/Wu-WbEFZ0Qo/s1600/Alex.jpg',
    image: 'https://m.media-amazon.com/images/M/MV5BYzVhNmJkZDMtYzgwMC00MjY5LTlkNzUtNjNjYjI3ODIwOTFhXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SY1000_CR0,0,661,1000_AL_.jpg',
    writers: ['Christopher Landon', 'T.J. Morrison'],
    director: 'J. Lee Thompson',
    actors: ['John Mills', 'Sylvia Syms', 'Anthony Quayle', 'Harry Andrews', 'Diane Clare'],
    synopsis: 'Captain Anson (John Mills) is tired and thirsty. Forced to leave his North African post when it becomes clear it will be invaded, Anson is on his way to Alexandria, Egypt, and looking forward to a nice cold beer. Before he gets there, though, circumstances pressure him to take on several passengers. Sister Diana Murdoch (Sylvia Syms) and Captain van der Poel (Anthony Quayle) prove to be excellent traveling companions, but Anson soon realizes that one of them is a German spy.',
    locationFilmed: ['Tripoli', 'Hampshire'],
    genres: ['Drama'],
    reviews: [{
      title: 'Really enjoyed it!',
      rating: 5,
      content: 'The film has flawed, interesting characters. It’s as much a drama about the mental impact of war and alcoholism as it is a war movie. Mills’ Anson is a troubled character who’s hard to warm to. Mills plays him well enough for the audience to care though, bringing out the human frailty behind his bitter attacks on those around him. Quayle’s van der Poel is an interesting addition to the bunch too. His arrogant macho posturing hiding some secrets to be revealed further down the line. Murdoch and Pugh are a bit bland, but filling the film with tough, troubled types might make for a group that is difficult to root for. I didn’t buy the love story shoe-horned in towards the end though.',
      createdBy: userIds [0]
    }]
  }, {
    createdBy: userIds[0],
    name: 'Mouse Hunt',
    yearReleased: 1997,
    movieLength: '1h 38mins',
    coverPhoto: 'https://wallpapersin4k.net/wp-content/uploads/2017/02/Mousehunt-Movie-Wallpapers-3.jpg',
    image: 'https://m.media-amazon.com/images/M/MV5BMzE0NTRhZWQtZmE5OS00NTI5LWJhMzMtMGU4MzE4MmRlZDE0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,678,1000_AL_.jpg',
    writers: ['Adam Rifkin'],
    director: 'Gore Verbinski',
    actors: ['Nathan Lane', 'Lee Evans'],
    synopsis: 'Two stumblebum inheritors are determined to rid their antique house of a mouse who is equally determined to stay where he is.',
    locationFilmed: ['Bass Lake, California'],
    genres: ['Comedy'],
    reviews: [{
      title: 'Just love mice!!',
      rating: 5,
      content: 'Really enjoyed the hunt for the smartest mouse in history!!',
      createdBy: userIds [0]
    }]
  }, {
    createdBy: userIds[3],
    name: 'Jaws',
    yearReleased: 1994,
    movieLength: '2h 4mins',
    image: 'https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX651_CR0,0,651,999_AL_.jpg',
    coverPhoto: 'http://i.imgur.com/duoVX3m.jpg',
    writers: ['Peter Benchley ', 'Carl Gottlieb '],
    director: 'Steven Spielberg',
    actors: ['Roy Scheider', 'Robert Shaw', 'Richard Dreyfuss'],
    synopsis: 'When a killer shark unleashes chaos on a beach resort, it is up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.',
    locationFilmed: ['Martha/s Vineyard, USA'],
    genres: ['Thriller'],
    reviews: [{
      title: 'Compelling',
      rating: 4,
      content: 'Compelling, well-crafted storytelling and a judicious sense of terror ensure Steven Spielbergs Jaws has remained a benchmark in the art of delivering modern blockbuster thrills.',
      createdBy: userIds [1]
    }]
  }, {
    createdBy: userIds[3],
    name: 'The Intouchables',
    yearReleased: 2011,
    movieLength: '1h 52mins',
    image: 'https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    coverPhoto: 'http://images6.fanpop.com/image/photos/37800000/Intouchables-2011-intouchables-2011-37817155-614-307.jpg',
    writers: ['Philippe Pozzo di Borgo', 'Olivier Nakache'],
    director: 'Olivier Nakache',
    actors: ['François Cluzet', 'Omar Sy', 'Audrey Fleurot'],
    synopsis: 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.',
    locationFilmed: ['Paris, France'],
    genres: ['Drama'],
    reviews: [{
      title: 'Brilliant',
      rating: 5,
      content: 'This movie is an absolute masterpiece. "Professional" critics, get over yourselves and watch it again instead of rating boring turds like Civil War and 10 Cloverfield Lane at 100.',
      createdBy: userIds [1]
    },
    {
      title: 'Underwhelming',
      rating: 2,
      content: 'Really found this film underwhelming...expected much more from the reviews.',
      createdBy: userIds [0]
    }]
  }, {
    createdBy: userIds[0],
    name: 'Spring Breakers',
    yearReleased: 2013,
    movieLength: '1h 34mins',
    image: 'https://m.media-amazon.com/images/M/MV5BNDBmYjU3NzAtZGVkNS00N2E3LWEyNTgtMjIwMTczYTE0M2Y4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg',
    coverPhoto: 'https://vignette.wikia.nocookie.net/spring-breakers/images/c/c3/Spring-breakers-Title-logo.png/revision/latest?cb=20140222023816',
    writers: ['Harmony Korine'],
    director: 'Harmony Korine',
    actors: ['James Franco', '	Selena Gomez', 'Vanessa Hudgens', 'Ashley Benson'],
    synopsis: 'Four college girls hold up a restaurant in order to fund their spring break vacation. While partying, drinking, and taking drugs, they are arrested, only to be bailed out by a drug and arms dealer. ',
    locationFilmed: ['Florida, USA'],
    genres: ['Crime'],
    reviews: [{
      title: 'Really truly terrible',
      rating: 1,
      content: 'One of the worst films Ive ever seen.',
      createdBy: userIds [1]
    }]
  } , {
    createdBy: userIds[4],
    name: 'Brokeback Mountain',
    yearReleased: 2005,
    movieLength: '2h 14min',
    image: 'https://m.media-amazon.com/images/M/MV5BMTY5NTAzNTc1NF5BMl5BanBnXkFtZTYwNDY4MDc3._V1_UX182_CR0,0,182,268_AL_.jpg',
    coverPhoto: 'http://images6.fanpop.com/image/photos/38700000/Brokeback-Mountain-jack-and-ennis-38765973-1920-1080.jpg',
    writers: ['Annie Proulx' , 'Larry McMurtry'],
    director: 'Ang Lee',
    actors: ['Jake Gyllenhaal' , 'Heath Ledger' , 'Michelle Williams'],
    synopsis: 'Two young men, Ennis Del Mar and Jack Twist, meet when they get a job as sheep herders on Brokeback Mountain. They are at first strangers, then they become friends. Throughout the weeks, they grow closer as they learn more about each other. One night, after some heavy drinking, they find a deeper connection. They then indulge in a blissful romance for the rest of the summer. Unable to deal with their feelings for each other, they part ways at the end of the summer. Four years go by, and they each settle down, Ennis in Wyoming with his wife and two girls, and Jack in Texas with his wife and son. Still longing for each other, they meet back up, and are faced with the fact that they need each other. They undeniably need each other, and unsure of what to do, they start a series of "fishing trips", in order to spend time together. The relationship struggles on for years until tragedy strikes.',
    locationFilmed: ['USA' , 'Canada'],
    genres: [' Drama' , 'Romance'],
    reviews: [{
      title: 'Beautiful film',
      rating: 5,
      content: 'A beautiful, epic Western, Brokeback Mountains love story is imbued with heartbreaking universality thanks to moving performances by Heath Ledger and Jake Gyllenhaal.',
      createdBy: userIds [1]
    },
    {
      title: 'A truly great love story',
      rating: 4,
      content: 'Like all great love stories, Ang Lees is one of tragic romance, strongly acted by Heath Ledger as the most buttoned-up of cowboys, and Michelle Williams as his betrayed and enraged wife.',
      createdBy: userIds [0]
    }]
  } , {
    createdBy: userIds[2],
    name: 'The Ring',
    yearReleased: 2003,
    movieLength: '1h 55min',
    image: 'https://m.media-amazon.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_UX182_CR0,0,182,268_AL_.jpg',
    coverPhoto: 'https://images8.alphacoders.com/649/thumb-1920-649031.jpg',
    writers: ['Ehren Kruger' , 'Kôji Suzuki'],
    director: 'Gore Verbinski',
    actors: ['Naomi Watts' , 'Martin Henderson', 'Brian Cox'],
    synopsis: 'A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it.',
    locationFilmed: ['Malibou Lake, California, USA'],
    genres: ['Horror' , 'Mystery'],
    reviews: [{
      title: 'Ridiculous',
      rating: 2,
      content: 'Rarely has a more serious effort produced a less serious result than in "The Ring," the kind of dread dark horror film where you better hope nobody in the audience snickers, because the film teeters right on the edge of the ridiculous.',
      createdBy: userIds [1]
    }]
  } , {
    createdBy: userIds[0],
    name: 'Shrek',
    yearReleased: 2001,
    movieLength: '1h 30mins',
    image: 'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    coverPhoto: 'https://i.imgur.com/xdmvrKA.jpg',
    writers: ['William Steig', 'Ted Elliott'],
    director: 'Andrew Adamson',
    actors: ['Mike Myers', 'Eddie Murphy', 'Cameron Diaz'],
    synopsis: 'After his swamp is filled with magical creatures, Shrek agrees to rescue Princess Fiona for a villainous lord in order to get his land back.',
    locationFilmed: ['USA'],
    genres: ['Animation' , 'Adventure' , 'Comedy', 'Fantasy'],
    reviews: [{
      title: 'Good quality entertainment',
      rating: 5,
      content: 'Im not one of those persons who praises Shrek all the time as one of the greatest movies ever made, like many other persons seem to do. Quite frankly I never really understood what the hype was all about. But still you have to give credit to this movie, its very entertaining and fun to watch over and over again. A good sidekick is always important, especially in an animated movie. A good sidekick can make the movie better but a bad sidekick can really ruin a movie. "Shrek" doesnt have a good sidekick...it has an excellent sidekick! Donkey is a wonderful and entertaining character thanks to Eddie Murphy who voiced him. The other main voices are provided by Mike Myers, Cameron Diaz and John Lithgow.',
      createdBy: userIds [1]
    },
    {
      title: 'Too scary for kids',
      rating: 5,
      content: 'Shrek is quite scary. My kids were scared. This is too scary for a disney film.',
      createdBy: userIds [0]
    }]
  } , {
    createdBy: userIds[0],
    name: 'The Godfather',
    yearReleased: 1972,
    movieLength: '2h 55mins',
    image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg',
    coverPhoto: 'https://www.pixelstalk.net/wp-content/uploads/images1/Godfather-Wallpapers-HD-Free-download.png',
    writers: ['Mario Puzo', 'Francis Ford Coppola'],
    director: 'Francis Ford Coppola',
    actors: [' Marlon Brando', 'Al Pacino', 'James Caan'],
    synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    locationFilmed: ['USA'],
    genres: ['Crime', 'Drama'],
    reviews: [{
      title: 'A Hollywood success',
      rating: 4,
      content: 'One of Hollywoods greatest critical and commercial successes, The Godfather gets everything right; not only did the movie transcend expectations, it established new benchmarks for American cinema.',
      createdBy: userIds [1]
    },
    {
      title: 'Slow start',
      rating: 3,
      content: 'The movie doesnt start out great, mainly just character introductions telling us about what type of people they are and their relations with the mafia. After that though the plot kicks in, and it really gets going, the violence is menacing, the story is engaging, and Al Pacinos character development is wonderful. Basically if youre willing to get passed the first thirty minutes or so, its a great watch.',
      createdBy: userIds [0]
    }]
  }, {
    createdBy: userIds[3],
    name: 'La La Land',
    yearReleased: 2016,
    movieLength: '2h 8mins',
    image: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    coverPhoto: 'https://images2.alphacoders.com/789/thumb-1920-789853.jpg',
    writers: ['Damien Chazelle'],
    director: 'Damien Chazelle',
    actors: ['Ryan Gosling', 'Emma Stone', 'Rosemarie DeWitt'],
    synopsis: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
    locationFilmed: [' Los Angeles, California, USA'],
    genres: [' Comedy' , 'Drama'],
    reviews: [{
      title: 'Magical',
      rating: 3,
      conent: 'A gorgeously photographed, unashamedly nostalgic, bittersweet marriage of the modern and the traditional, proving Chazelles fantastic eye for musical sequences.',
      createdBy: userIds [3]
    }]
  }, {
    createdBy: userIds[2],
    name: 'Four Weddings and a Funeral',
    yearReleased: 1994,
    movieLength: '1h 57mins',
    image: 'https://m.media-amazon.com/images/M/MV5BMTkyNTc3MzM4Ml5BMl5BanBnXkFtZTcwNzcxNzczNA@@._V1_SY500_CR0,0,333,500_AL_.jpg',
    coverPhoto: 'https://cdn-hit.scadigital.io/media/32635/four-weddings.jpg?preset=MainImage',
    writers: ['Richard Curtis'],
    director: 'Mike Newell',
    actors: ['Hugh Grant', 'James Fleet', 'Andie MacDowell'],
    synopsis: 'The film follows the fortunes of Charles and his friends as they wonder if they will ever find true love and marry. Charles thinks hes found "Miss Right" in Carrie, an American. This British subtle comedy revolves around Charlie, his friends and the four weddings and one funeral which they attend.',
    locationFilmed: ['United Kingdom'],
    genres: [' Comedy' , 'Drama', 'Romance'],
    reviews: [{
      title: 'A classic British comedy',
      rating: 4,
      content: 'A bit predictable but efficient storyline, with definitely funny scenes. I liked the diversity in the characters - well-played by good actors. Another great British comedy just as I love it.',
      createdBy: userIds [3]
    }]
  }, {
    createdBy: userIds[0],
    name: 'Finding Nemo',
    yearReleased: 2003,
    movieLength: '1h 40mins',
    image: 'http://2.bp.blogspot.com/_6DfQTbAuzNc/TFXuBZWBhVI/AAAAAAAAAQY/a6GMixqO0W8/s1600/finding+nemo.jpg',
    coverPhoto: 'https://pixel.nymag.com/imgs/daily/vulture/2016/06/29/29-finding-dory.w700.h700.jpg',
    writers: ['Andrew Stanton', 'Lee Unkrich'],
    director: 'Andrew Stanton',
    actors: ['Albert Brooks', 'Ellen DeGeneres', 'Alexander Gould'],
    synopsis: 'A clown fish named Marlin lives in the Great Barrier Reef and loses his son, Nemo, after he ventures into the open sea, despite his fathers constant warnings about many of the oceans dangers. Nemo is abducted by a boat and netted up and sent to a dentists office in Sydney. While Marlin ventures off to try to retrieve Nemo, Marlin meets a fish named Dory, a blue tang suffering from short-term memory loss. The companions travel a great distance, encountering various dangerous sea creatures such as sharks, anglerfish and jellyfish, in order to rescue Nemo from the dentists office, which is situated by Sydney Harbour. While the two are searching the ocean far and wide, Nemo and the other sea animals in the dentists fish tank plot a way to return to the sea to live their lives free again.',
    locationFilmed: ['United States of America'],
    genres: [' Animation' , 'Adventure', 'Family', 'Fantasy', 'Comedy'],
    reviews: [{
      title: 'Sensible Title',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdBy: userIds [3]
    },
    {
      title: 'Sensible Title',
      rating: 4,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdBy: userIds [0]
    }]
  }, {
    createdBy: userIds[1],
    name: 'Avatar',
    yearReleased: 2009,
    movieLength: '2h 42mins',
    image: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    coverPhoto: 'https://i1.wp.com/www.animationxpress.com/wp-content/uploads/2014/06/Avatar_images.jpg',
    writers: ['James Cameron'],
    director: 'James Cameron',
    actors: ['Sam Worthington', 'Zoe Saldana', 'Signourney Weaver'],
    synopsis: 'When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker Selfridges intentions of driving off the native humanoid Navi in order to mine for the precious material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, Jake gathers intel for the cooperating military unit spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Navi people with the use of an "avatar" identity. While Jake begins to bond with the native tribe and quickly falls in love with the beautiful alien Neytiri, the restless Colonel moves forward with his ruthless extermination tactics, forcing the soldier to take a stand - and fight back in an epic battle for the fate of Pandora.',
    locationFilmed: ['United States of America'],
    genres: [' Animation' , 'Adventure', 'Family', 'Fantasy', 'Comedy'],
    reviews: [{
      title: 'Sensible Title',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdBy: userIds [1]
    }]
  }, {
    createdBy: userIds [3],
    name: 'The Lives of Others',
    yearReleased: '2006',
    movieLength: '2h 17min',
    image: 'https://m.media-amazon.com/images/M/MV5BNDUzNjYwNDYyNl5BMl5BanBnXkFtZTcwNjU3ODQ0MQ@@._V1_.jpg' ,
    coverPhoto: 'https://images5.alphacoders.com/342/342573.jpg',
    writers: ['Florian Henckel von Donnersmarck'],
    director: 'Florian Henckel von Donnersmarck',
    actors: ['Martina Gedeck', 'Sebastian Koch', 'Ulrich Mühe'],
    synopsis: 'In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.',
    locationFilmed: ['Berlin, Germany'],
    genres: ['Drama', 'Thriller'],
    reviews: [{
      title: 'Sensible Title',
      rating: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdBy: userIds [3]
    }]
  }, {
    createdBy: userIds [1],
    name: 'Leon',
    yearReleased: '1994',
    movieLength: '1h 50min',
    image: 'https://m.media-amazon.com/images/M/MV5BZDAwYTlhMDEtNTg0OS00NDY2LWJjOWItNWY3YTZkM2UxYzUzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,710,1000_AL_.jpg' ,
    coverPhoto: 'https://mz-prod.s3.amazonaws.com/uploads/photo/file/63938/original.jpg' ,
    writers: ['Luc Besson'],
    director: 'Luc Besson',
    actors: ['Jean Reno', 'Gary Oldman', 'Natalie Portman'],
    synopsis: 'Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin/s trade.',
    locationFilmed: ['New York'],
    genres: ['Crime', 'Drama', 'Thriller'],
    reviews: [{
      title: 'Incredible',
      rating: 5,
      content: 'Luc Bessons original cut feels more like a journey than just a joy-buzzer jolt of action, and the deeper, braver, darker story he set out to tell - a fractured and fractious fairy tale. When people rave about The Professional, they mean Léon.',
      createdBy: userIds [1]
    }]
  }, {
    createdBy: userIds [3],
    name: 'City of God',
    yearReleased: '2002',
    movieLength: '2h 10min',
    image: 'https://m.media-amazon.com/images/M/MV5BMGU5OWEwZDItNmNkMC00NzZmLTk1YTctNzVhZTJjM2NlZTVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,677,1000_AL_.jpg',
    coverPhoto: 'https://images7.alphacoders.com/660/thumb-1920-660667.jpg' ,
    writers: ['Bráulio Mantovani', 'Paulo Lins'],
    director: 'Fernando Meirelles',
    actors: ['Alexandre Rodrigues', 'Leandro Firmino', 'Matheus Nachtergaele'],
    synopsis: 'In the slums of Rio, two kids paths diverge as one struggles to become a photographer and the other a kingpin.',
    locationFilmed: ['Rio de Janeiro'],
    genres: ['Crime', 'Drama'],
    reviews: [{
      title: 'Compelling',
      rating: 4,
      content: 'A shocking and disturbing, but always compelling look at life in the slums of Rio de Janiero.',
      createdBy: userIds [3]
    }]
  }, {
    createdBy: userIds [0],
    name: 'Aladdin and the Return of Jafar',
    yearReleased: '1994',
    movieLength: '1h 9min',
    image: 'https://m.media-amazon.com/images/M/MV5BMTY5NTc5NTEzN15BMl5BanBnXkFtZTcwMTAwNTcyMQ@@._V1_.jpg' ,
    coverPhoto: 'https://images4.alphacoders.com/796/thumb-1920-796952.jpg' ,
    writers: ['Doug Langdale', 'Duane Capizzi '],
    director: ' Toby Shelton',
    actors: ['Jonathan Freeman', 'Scott Weinger', 'Dan Castellaneta '],
    synopsis: 'Jafar comes for revenge on Aladdin, using a foolish thief and Iagos treachery to find a way back into power.',
    locationFilmed: ['USA'],
    genres: ['Animation', 'Adventure', 'Comedy'],
    reviews: [{
      title: 'A family favourite!',
      rating: 5,
      content: 'Aladdin is a family favourite of ours! The kids and my husband love it and its the perfect after dinner movie. Would highly recommend as a Sunday night classic!',
      createdBy: userIds [1]
    }]
  }, {
    createdBy: userIds [4],
    name: 'The Killing Fields',
    yearReleased: '1984',
    movieLength: '2h 21min',
    image: 'https://m.media-amazon.com/images/M/MV5BMGI0NzI5YjAtNTg0MS00NDA2LWE5ZWItODRmOTAxOTAxYjg2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg' ,
    coverPhoto: 'https://lh3.googleusercontent.com/csTTZcpkckLH3WxZXmxhPEhJJi53xUMHTlGGACzBUHCms7Mph6DazQQQJPJ6Q05mK624b8Zx0MJiFea3DE80F7UhNPJVjl6MIf9E8sJwWPt5L0xk_USvYXb-h_9b-W79q5hDsJG2l2xahtUP0lxLjCgKijWNMysF8eAoLaUhZsF9AC7Zse7bMpZPc0zVUlGiqsS_QdJysCCbeU0GB-g6Y1nS_DVmobTLoD4rIk4Ibswf5bf5xDK2_EuenE5mJh9_8e45y8ScsfgKHUbn8ZYSODBs8Q-BpxCw9bQ6yJPCZXfT96PDbR4Sno2Y8mYZuP3guDKpC3ZeFYz2G4m462SftU96F2yDXJRaKx0vIiIHokIHm4sXbBDKqNH9gUe1MmctvFKdtn0JdqQBdfCePK420wruQjPup-YK2nzHSRxYO1jk27GqwAVLB5IEDl0-4614AgQOVDyZy1Zw4uXkd6bgprA7OFXT2fpOqn3eUKTuBReXh5erSk8frfI_n1gfbNPneJ8OckKDLxLqgOxRRWEggLcrx1ORTeUEE9yfLYaZ63soAZJzCvGI5XXXvMg4lqXVVge9dsrL4NZw2BeY-zbJkiMKnZFkTZeuAzWK9v25Cds=w760-h380-no' ,
    writers: ['Bruce Robinson '],
    director: 'Roland Joffé',
    actors: ['Sam Waterston', 'Haing S. Ngor', 'John Malkovich'],
    synopsis: 'A journalist is trapped in Cambodia during tyrant Pol Pot/s bloody Year Zero cleansing campaign, which claimed the lives of two million undesirable civilians.' ,
    locationFilmed: ['USA'],
    genres: ['Biography', 'Drama', 'History'],
    reviews: [{
      title: 'Artfully composed',
      rating: 5,
      content: 'Artfully composed, powerfully acted, and fueled by a powerful blend of anger and empathy, The Killing Fields is a career-defining triumph for director Roland Joffé and a masterpiece of American cinema.',
      createdBy: userIds [3]
    }]
  }, {
    createdBy: userIds [3],
    name: 'Scream',
    yearReleased: '1996',
    movieLength: '1h 51min',
    image: 'https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SY1000_CR0,0,673,1000_AL_.jpg',
    coverPhoto: 'https://images6.alphacoders.com/439/439126.jpg' ,
    writers: [' Kevin Williamson'],
    director: 'Wes Craven',
    actors: [' Neve Campbell', 'Courteney Cox', 'David Arquette'],
    synopsis: 'A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.',
    locationFilmed: ['California'],
    genres: ['Horror', 'Mystery'],
    reviews: [{
      title: 'Limited shock value',
      rating: 2,
      content: 'By the time Scream arrives at its final twist, Craven has done too many contortions of his own to give the finale much shock value.',
      createdBy: userIds [1]
    }]
  }, {
    createdBy: userIds [2],
    name: 'Lost in Translation',
    yearReleased: '2003',
    movieLength: '1h 41min',
    image: 'https://m.media-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_UX182_CR0,0,182,268_AL_.jpg',
    coverPhoto: 'https://images8.alphacoders.com/636/thumb-1920-636453.jpg',
    writers: ['Sofia Copolla'],
    director: 'Sofia Copolla',
    actors: ['Bill Murray', 'Scarlett Johansson', 'Giovanni Ribisi' ],
    synopsis: 'A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.',
    locationFilmed: ['Tokyo'],
    genres: ['Drama'],
    reviews: [{
      title: 'Sensible Title',
      rating: 5,
      content: 'review',
      createdBy: userIds [3]
    }]
  }, {
    createdBy: userIds [1],
    name: 'The Shining',
    yearReleased: '1980',
    movieLength: '2h 26min',
    image: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    coverPhoto: 'https://images5.alphacoders.com/310/310773.jpg',
    writers: ['Stephen King', 'Stanley Kubrick'],
    director: 'Stanley Kubrick ',
    actors: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
    synopsis: 'A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.',
    locationFilmed: ['Stansted Airport'],
    genres: ['Drama', 'Horror'],
    reviews: [{
      title: 'Except for the scenery, nothing is good in this film',
      rating: 1,
      content: 'Except the scenery, nothing is good in this film. Lets start with the actors. Jack Nicholson puts on a horrendous performance, i will say that much. The woman, cant even remember her name, is one of the worst actors I have ever seen. She was just annoying and I was pleading for her to die throughout the movie. The little boy and his slobbering fits made me want to puke.',
      createdBy: userIds [2]
    }]
  }, {
    createdBy: userIds [0],
    name: 'The Lion King',
    yearReleased: '1994',
    movieLength: '1h 28min',
    image: 'https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg' ,
    coverPhoto: 'https://i.imgur.com/Q4hDifF.jpg?1',
    writers: ['Irene Mecchi', 'Jonathan Roberts'],
    director: 'Roger Allers',
    actors: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'],
    synopsis: 'A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his fathers death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.',
    locationFilmed: ['California'],
    genres: ['Animation', 'Adventure'],
    reviews: [{
      title: 'Sexual innuendo...I think so',
      rating: 3,
      content: ' We must assume that the lion king is the first disney animation to contain a fart joke. or be it one aimed over the head of the younger members of its audience or tailored to its baby boomer parents. Theres also a moment when you could swear that our leonine lover are about to make the two back to beast, as they no doubt would if this was live action.',
      createdBy: userIds [2]
    }]
  }, {
    createdBy: userIds [4],
    name: 'Amelie',
    yearReleased: '2001',
    movieLength: '2h 2min',
    image: 'https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
    coverPhoto: 'https://images3.alphacoders.com/424/thumb-1920-42447.jpg',
    writers: ['Guillaume Laurant', 'Jean-Pierre Jeunet'],
    director: 'Jean-Pierre Jeunet',
    actors: ['Audrey Tautou', 'Mathieu Kassovitz'],
    synopsis: 'Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.',
    locationFilmed: ['France'],
    genres: ['Comedy', 'Romance'],
    reviews: [{
      title: 'Choccy Souffle',
      rating: 4,
      content: 'This film is filled with aery, whimsical charm the way that a chocolate souffle is filled with air.',
      createdBy: userIds [2]
    }]
  }, {
    createdBy: userIds [3],
    name: 'Gladiator',
    yearReleased: '2000',
    movieLength: '2h 35min',
    image: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg' ,
    coverPhoto: 'https://images7.alphacoders.com/338/338965.jpg',
    writers: [' David Franzoni'],
    director: 'Ridley Scott',
    actors: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
    synopsis: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    locationFilmed: ['Morocco'],
    genres: ['Action', 'Adventure', 'Drama'],
    reviews: [{
      title: 'Plugged in',
      rating: 3,
      content: 'Ancient Rome is thriving, after general maximus leads the Roman legions to victory in the final battle of the germanic tribes, he wants to go home. Gladiator is a movie of such astounding scope and sweep and such masterful story-telling that it makes its story-line seem classic rather than cliche.',
      createdBy: userIds [2]
    }]
  }, {
    createdBy: userIds [2],
    name: 'Y Tu Mamá También',
    yearReleased: '2001',
    movieLength: '1h 46min',
    image: 'https://m.media-amazon.com/images/M/MV5BNDhjMzc3ZTgtY2Y4MC00Y2U3LWFiMDctZGM3MmM4N2YzNDQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg' ,
    coverPhoto: 'http://i.imgur.com/fPFM9jY.jpg',
    writers: ['Carlos Cuarón', 'Alfonso Cuarón'],
    director: 'Alfonso Cuarón',
    actors: ['Maribel Verdú', 'Gael García Bernal', 'Daniel Giménez Cacho'],
    synopsis: 'In Mexico, two teenage boys and an attractive older woman embark on a road trip and learn a thing or two about life, friendship, sex, and each other.' ,
    locationFilmed: ['Mexico'],
    genres: ['Addenture', 'Comedy', 'Drama'],
    reviews: [{
      title: 'Provocative',
      rating: 3,
      content: 'A remarkable achievement to take two mostly unlikeable, raunchy teens and craft a bitter sweet, moving, coming of age movie that has you rooting for the boys almost before you know it.',
      createdBy: userIds [2]
    }]
  }, {
    createdBy: userIds [1],
    name: 'Howls Moving Castle',
    yearReleased: '2004',
    movieLength: '1h 59min ',
    image: 'https://m.media-amazon.com/images/M/MV5BMjZmNWZmZDMtMjcyZS00NGYwLTlkZmYtZDA0YzAyN2RiNzM0XkEyXkFqcGdeQXVyMzg2MzE2OTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    coverPhoto: 'https://images8.alphacoders.com/712/thumb-1920-712403.jpg',
    writers: ['Hayao Miyazaki', 'Diana Wynne Jones'],
    director: 'Hayao Miyazaki',
    actors: ['Chieko Baishô', 'Takuya Kimura', 'Tatsuya Gashûin'],
    synopsis: 'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
    locationFilmed: ['USA'],
    genres: ['Animation', 'Adventure', 'Fantasy'],
    reviews: [{
      title: 'A true masterpiece',
      rating: 4,
      content: 'Just as Miyazaki seemed on the verge of properly crossing over, he serves up an animi-riddle wrapped in enigma - though with all his usual charm, wit and hand-drawn beauty.',
      createdBy: userIds [1]
    }]
  }, {
    createdBy: userIds [4],
    name: 'Play it again, Sam',
    yearReleased: '1972',
    movieLength: '1h 25min',
    image: 'https://m.media-amazon.com/images/M/MV5BZTI2ODBiNmQtY2RmZC00Yzg3LWI4MWYtMjE4OTA0NWRmZjY0XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SY1000_CR0,0,658,1000_AL_.jpg',
    coverPhoto: 'https://thetimothycareyexperience.files.wordpress.com/2014/06/sam1.jpg',
    writers: ['Woody Allen'],
    director: 'Herbert Ross',
    actors: ['Woody Allen', 'Diane Keaton'],
    synopsis: 'A neurotic film critic obsessed with the movie Casablanca (1942) attempts to get over his wife leaving him by dating again with the help of a married couple and his illusory idol, Humphrey Bogart.',
    locationFilmed: [ 'San Francisco'],
    genres: ['Comedy', 'Romance'],
    reviews: [{
      title: 'Too much coherence',
      rating: 3,
      content: 'Maybe the movie has too much coherence, and the plot is too predictable; thats a weakness of films based on well-made Broadway plays. Still, thats hardly a serious complaint about something as funny as Play It Again, Sam.',
      createdBy: userIds [2]
    }]
    // here is new code
  }, {
    createdBy: userIds[0],
    name: 'Mrs Doubtfire',
    yearReleased: '1993',
    movieLength: '2h 5min',
    image: 'https://m.media-amazon.com/images/M/MV5BMjExMDUzODE1N15BMl5BanBnXkFtZTgwNTU5NTYxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    coverPhoto: 'https://images6.alphacoders.com/438/thumb-1920-438053.jpg',
    writers: ['Anne Fine', 'Randi Mayem Singer'],
    director: 'Chris Columbus',
    actors: ['Robin Williams', 'Sally Field', 'Pierce Brosnan'],
    synopsis: 'After a bitter divorce, an actor disguises himself as a female housekeeper to spend time with his children held in custody by his former wife.',
    locationFilmed: 'California',
    genres: ['Comedy', 'Drama'],
    reviews: [{
      title: 'Titillating',
      rating: 5,
      content: 'Every time I see it, I hose myself with laughter. If you have not seen it, then you need to download it or buy it.',
      createdBy: userIds [4]
    }]
  }, {
    createdBy: userIds[1],
    name: 'Time Bandits',
    yearReleased: '1981',
    movieLength: '1h 56min',
    image: 'https://m.media-amazon.com/images/M/MV5BMTg2MDYwMzM0NF5BMl5BanBnXkFtZTcwODI3MTQ5OQ@@._V1_.jpg',
    coverPhoto: 'https://images6.alphacoders.com/647/thumb-1920-647207.jpg',
    writers: ['Michael Palin', 'Terry Gilliam'],
    director: 'Terry Gilliam' ,
    actors: ['Sean Connery', 'Shelley Duvall', 'John Cleese '],
    synopsis: 'A young boy accidentally joins a band of time travelling dwarves, as they jump from era to era looking for treasure to steal.',
    locationFilmed: 'London',
    genres: ['Adventure', 'Comedy', 'Fantasy'],
    reviews: [{
      title: 'A lot or a little...',
      rating: 3,
      content: 'This movie is an enjoyable romp meant to appeal to the adventurous child in everyone',
      createdBy: userIds [3]
    }]
  }, {
    createdBy: userIds[2],
    name: 'Star Trek',
    yearReleased: '2009',
    movieLength: '2h 7min',
    image: 'https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    coverPhoto: 'https://images.alphacoders.com/764/thumb-1920-76401.jpg',
    writers: ['Roberto Orci', 'Alex Kurtzman'],
    director: 'J.J.Abrams',
    actors: ['Chris Pine', 'Zachary Quinto', 'Simon Pegg'],
    synopsis: 'The brash James T. Kirk tries to live up to his fathers legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.',
    locationFilmed: 'Alaska',
    genres: ['Action', 'Adventure'],
    reviews: [{
      title: 'Is it any good?',
      rating: 4,
      content: 'Rocketing at warp speed without ever slowing down, J.J. Abrams directs this reboot as a smart, speedy thrill ride that does not indulge in nostalgia for its own sake. ',
      createdBy: userIds[2]
    }]
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
