function feedCtrl($scope, $http, $auth, $state) {
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
            review.movieId = movie._id;
            review.movieName = movie.name;
            review.movieImage = movie.image;
            review.creatorId = user._id;
            review.creatorUsername = user.username;
            review.creatorProfilePicture = user.profilePicture;
            $scope.feedContent.push(review);
          }
        });
      });
    });
  });
  $scope.like = function(review){
    if($auth.isAuthenticated() && review.createdBy._id !== $scope.userId){
      if(review.likedBy.includes($scope.userId)){
        const index = review.likedBy.indexOf($scope.userId);
        review.likedBy.splice(index, 1);
        $http({
          method: 'PUT',
          url: `/api/movies/${review.movieId}/reviews/${review._id}`,
          data: review
        }).then(() => $state.go('feed'));
      }else{
        review.likedBy.push($scope.userId);
        $http({
          method: 'PUT',
          url: `/api/movies/${review.movieId}/reviews/${review._id}`,
          data: review
        }).then(() => $state.go('feed'));
      }
    }
  };
}

export default feedCtrl;
