function profileCtrl ($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(result => {
      $scope.user = result.data;
      if($scope.user.followedBy.includes($scope.userId)){
        $scope.buttonName = 'Unfollow';
      } else {
        $scope.buttonName = 'Follow';
      }
    });
  $scope.follow = function() {
    if($scope.user.followedBy.includes($scope.userId)){
      const index = $scope.user.followedBy.indexOf($scope.user);
      $scope.user.followedBy.splice(index, 1);
      $scope.buttonName = 'Follow';
      $http({
        method: 'PUT',
        url: `api/users/${$state.params.id}`,
        data: $scope.user
      }).then(() => $state.go('profileShow', { id: $state.params.id }));
    } else {
      $scope.user.followedBy.push($scope.userId);
      $scope.buttonName = 'Unfollow';
      $http({
        method: 'PUT',
        url: `api/users/${$state.params.id}`,
        data: $scope.user
      }).then(() => $state.go('profileShow', { id: $state.params.id }));
    }
  };
}


export default profileCtrl;
