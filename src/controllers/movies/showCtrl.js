function showCtrl($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `/api/movies/${$state.params.id}`
  }).then(result => {
    $scope.movie = result.data;
  });
  $scope.handleDelete = function () {
    $http({
      method: 'DELETE',
      url: `/api/movies/${$state.params.id}`
    }).then(() => $state.go('movieIndex'));
  };
}

export default showCtrl;
