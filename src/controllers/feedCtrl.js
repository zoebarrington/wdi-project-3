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
    $scope.feedContent = [];
    $scope.following.forEach(function(user){
      user.moviesReviewed.forEach(function(movie){
        movie.reviews.forEach(function(review){
          if(review.createdBy === user._id){
            review.createdBy = user;
            $scope.feedContent.push(review);
          }
        });
      });
    });
  });
}

export default feedCtrl;
