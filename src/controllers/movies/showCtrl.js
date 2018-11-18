function showCtrl($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `/api/movies/${$state.params.id}`
  }).then(result => {
    $scope.movie = result.data;
  });
}

export default showCtrl;
