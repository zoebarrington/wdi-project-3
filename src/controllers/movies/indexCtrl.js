function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/movies'
  }).then(result => {
    $scope.movies = result.data;
  });
}

export default indexCtrl;
