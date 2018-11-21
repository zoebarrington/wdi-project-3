function editProfileCtrl($scope, $http, $state){
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  }).then(result => $scope.user = result.data);
  $scope.updateProfile = function () {
    $http({
      method: 'PUT',
      url: `/api/users/${$state.params.id}`,
      data: $scope.user
    }).then(() => $state.go('profileShow', { id: $state.params.id }));
  };
}

export default editProfileCtrl;
