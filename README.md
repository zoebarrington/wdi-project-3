# **Filmspotting** <img src="https://trello-attachments.s3.amazonaws.com/5bed8efca96b2a5821714190/5beec7e682068e09a7ee4ad9/c5409bca2ad015f6e8fdbcae4818f1a6/filmspotting-wordmark-3000x3000.jpg" style="width: 48px;"/>

## Background

Filmspotting is a social media platform for movies. Users can login and review movies that they have watched.

Launch on [Heroku](https://film-spotting.herokuapp.com/#!/) or check out the GitHub [Repo](https://github.com/zoebarrington/wdi-project-3).

## Course Curriculum
**Week 7-8*** | Module Three
* AngularJS
* Token Authentication & Session Authentication
* Third-party APIs
* Testing - Mocha and Chai

*Full curriculum available at bottom of page*

***

## Brief

Your instructors will partner you with other classmates to design and collaboratively build a MEAN stack app of your own design.

Your app must:
* Use Mongo, Node and Express to build a server-side API
* Have two models, one of which must be a user models
* Include authentication to restrict access to appropriate users
* Include automated tests for at least one resource
* Use Angular to build a front-end which consumes your API  
* Use SCSS instead of CSS  
* Use Webpack and Yarn to manage your dependencies and compile your source code

**Timeframe:** 1 week(November 2018)

## Visuals

### Home Page
![Home-Page](screenshots/filmspot-home.gif)

### Index Page
**Used to find a film on the site**

![Index-Page](screenshots/filmspot-gif.gif)

### Show Page
**Used to see film information, read reviews, or write your own**
![Show-Page](screenshots/show-film.gif)

### Profile Page
![Profile-Page](screenshots/film-profilepage.gif)


## Technologies Used
* AngularJS
* JavaScript (ES6)
* HTML5
* SCSS
* Bulma CSS Framework
* Git
* GitHub
* Bcrypt
* JWT
* Moment.js
* Mongoose
* Heroku
* Trello
* Yarn
* Chai
* Mocha
* Leaflet.js map
* OpenStreetMap API

## APIS Used


## Approach Taken

> Teamwork and Time Management
* Daily stand-up every morning
* Summary at end of every day to review what's been achieved that day  
* Co-located work space and online communication (Trello and Slack)
* Continuous status checking throughout each day

### Trello
![Trello](screenshots/prj3-trello.gif)

### Wireframes
#### Home Page  
![Homepage](screenshots/project3-home.jpg)

#### Index Page  
![Indexpage](screenshots/project3-index.jpg)

#### Show Page
![Showpage](screenshots/project3-show.jpg)

#### Profile Page  
![Profilepage](screenshots/project3-profile.jpg)

#### Newsfeed  
![Newsfeed](screenshots/project3-newsfeed.jpg)

## Features
All Features

> All users have access to:
* Home page
* Movie index, show and reviews
* External API of current movies in the cinema
*

> Registered users have access to:
* Log in and log out  
* Add a movie
* Write movie reviews
* Create their own user profile
* Visit other user's profiles and follow them
* View all specified user's reviews on their profile
* View newsfeed consisting of movies reviewed only by followed users

## Featured Piece of Code no.1
```javascript  
$http({
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=1712d52487cc8d1fca9c99a892dd1f38&language=en-US&page=1'
}).then(result => {
  $scope.releases = result.data.results;
  console.log('scope', $scope.releases);
});
```

This piece of code is taken from the indexCtrl.js file in the back-end.

## Featured Piece of Code no.2

## Wins and Blockers
I think our biggest win was our ability to work well in a team. By achieving full transparency and communication, we were able to work to our individual strength, and help each other through any weaknesses.

In terms of the elements that I built, my biggest win was the index page. I was given full responsibility for this page, and I am really pleased with the search bar and the implementation of an external API.

My biggest blocker was probably testing as, prior to this project, I did not have much experience in it. However, completing the tests for the project was extremely beneficial for me as it allowed me to feel much more comfortable tacking tests.

## Future Features

* Add maps to show cinemas near you
* Add messaging so that users can message each other about movies/reviews
* Make the app mobile responsive

***

## Course Curriculum

> **Week 1-3** | Module One  
* HTML5
* CSS3 and CSS Animation
* Sass
* JavaScript
* jQuery

> **Week 4** | Project One

> **Week 5** | Module Two  
* Node.js
* Express.js
* EJS
* MongoDB
* User Authentication  

> **Week 6** | Project Two

> **Week 7-8** | Module Three
* AngularJS
* Token Authentication & Session Authentication
* Third-party APIs
* Mocha and Chai

> **Week 9** | Project Three

> **Week 10-11** | Module Four
* React
* JSX
* ES6

>**Week 12** | Project Four

***
## Contact
### Zoe Barrington  
Email: zlfbarrington@gmail.com

[Porfolio](zoebarrington.com) | [LinkedIn](https://www.linkedin.com/notifications/) | [GitHub](https://github.com/zoebarrington)
