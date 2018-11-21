const genres = [
  {
    name: 'Action'
  }, {
    name: 'Thriller'
  }, {
    name: 'Comedy'
  }, {
    name: 'Horror'
  }, {
    name: 'Drama'
  }, {
    name: 'Romance'
  },{
    name: 'Fantasy'
  }, {
    name: 'Adventure'
  }, {
    name: 'Crime'
  }, {
    name: 'Animation'
  }];



function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/movies'
  }).then(result => {
    $scope.allMovies = result.data;
    $scope.filteredMovies = $scope.allMovies;
  });
  $http({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=1712d52487cc8d1fca9c99a892dd1f38&language=en-US&page=1'
  }).then(result => {
    $scope.releases = result.data.results;
    console.log('scope', $scope.releases);
  });
  $scope.title = 'Highest Rated';
  $scope.genres = genres;
  $scope.filterGenres = function(genre) {
    $scope.title = genre.name;
    $scope.filteredMovies = $scope.allMovies.filter(movie =>
      movie.genres.includes(genre.name)
    );
  };
  $scope.handleFilterSubmit = function() {
    $scope.filteredMovies = $scope.allMovies.filter(movie =>
      movie.name.toLowerCase().startsWith($scope.searchTerm.toLowerCase()));
  };
  $scope.clearFilters = function() {
    $scope.title = 'Highest Rated';
    $scope.filteredMovies = $scope.allMovies;
  };
}



export default indexCtrl;
