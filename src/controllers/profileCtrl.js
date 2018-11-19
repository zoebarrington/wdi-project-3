function profileCtrl ($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(result => {
      $scope.user = result.data;
    });
}

export default profileCtrl;
