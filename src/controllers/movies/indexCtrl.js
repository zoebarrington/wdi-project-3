const genres = [
  {
    name: 'Action'
  }, {
    name: 'Thriller'
  }, {
    name: 'Comedy'
  }, {
    name: 'Romantic Comedy'
  }, {
    name: 'Horror'
  }, {
    name: 'Drama'
  }, {
    name: 'Romance'
  }, {
    name: 'Documentary'
  }, {
    name: 'Fantasy'
  }, {
    name: 'Adventure'
  }, {
    name: 'Crime'
  }];



function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/movies'
  }).then(result => {
    $scope.allMovies = result.data;
    $scope.filteredMovies = $scope.allMovies;
  });
  $scope.genres = genres;
  $scope.filterGenres = function(genre) {
    $scope.filteredMovies = $scope.allMovies.filter(movie =>
      movie.genres.includes(genre.name)
    );
  };
  $scope.clearFilters = function() {
    $scope.filteredMovies = $scope.allMovies;
  };
}



export default indexCtrl;
