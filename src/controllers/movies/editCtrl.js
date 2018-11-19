function editCtrl($scope, $http, $state){
  $http({
    method: 'GET',
    url: `/api/movies/${$state.params.id}`
  }).then(result => $scope.movie = result.data);
  $scope.handleSubmit = function () {
    $http({
      method: 'PUT',
      url: `/api/movies/${$state.params.id}`,
      data: $scope.movie
    }).then(() => $state.go('movieShow', { id: $state.params.id }));
  };
}

export default editCtrl;
