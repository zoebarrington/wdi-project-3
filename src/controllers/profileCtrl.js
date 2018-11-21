function profileCtrl ($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(result => {
      $scope.user = result.data;
    });
  $scope.follow = function() {
    if($scope.user.followedBy.includes($scope.userId)){
      const index = $scope.user.followedBy.indexOf($scope.user);
      $scope.user.followedBy.splice(index, 1);
      $http({
        method: 'PUT',
        url: `api/users/${$state.params.id}`,
        data: $scope.user
      }).then(() => $state.go('profileShow', { id: $state.params.id }));
    } else {
      $scope.user.followedBy.push($scope.userId);
      $http({
        method: 'PUT',
        url: `api/users/${$state.params.id}`,
        data: $scope.user
      }).then(() => $state.go('profileShow', { id: $state.params.id }));
    }
  };
}


export default profileCtrl;
