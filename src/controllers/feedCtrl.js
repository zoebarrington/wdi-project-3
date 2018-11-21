function feedCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/feed'
  }).then(result => {
    $scope.users = result.data;
    $scope.following = [];
    for(let i = 0; i < $scope.users.length; i++){
      if($scope.users[i].followedBy.includes($scope.userId)){
        $scope.following.push($scope.users[i]);
      }
    }
  });
}

export default feedCtrl;
