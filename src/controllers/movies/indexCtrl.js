function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/movies'
  }).then(result => {
    $scope.movies = result.data;
  });
  $scope.genresIndexLink = function() {
    const genreIndexPage = [];
    for(let i=0; i < length; i++) {

      
    }
  }
}



export default indexCtrl;
