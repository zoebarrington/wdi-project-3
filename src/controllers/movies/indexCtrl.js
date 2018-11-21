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
