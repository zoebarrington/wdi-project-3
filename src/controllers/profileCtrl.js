function profileCtrl ($state, $scope, $http, $auth) {
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(result => {
      $scope.user = result.data;
      $scope.userReviews = [];
      let total = 0;
      $scope.user.moviesReviewed.forEach(function(movie){
        movie.reviews.forEach(function(review){
          if(review.createdBy === $scope.user._id){
            review.movieId = movie._id;
            review.movieName = movie.name;
            review.movieImage = movie.image;
            $scope.userReviews.push(review);
            total = total + review.likedBy.length;
          }
        });
      });
      $scope.totalLikes = total;
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
  $scope.like = function(review){
    if($auth.isAuthenticated() && review.createdBy._id !== $scope.userId){
      if(review.likedBy.includes($scope.userId)){
        const index = review.likedBy.indexOf($scope.userId);
        review.likedBy.splice(index, 1);
        $scope.totalLikes = $scope.totalLikes - 1;
        $http({
          method: 'PUT',
          url: `/api/movies/${review.movieId}/reviews/${review._id}`,
          data: review
        }).then(() => $state.go('profileShow', { id: $state.params.id }));
      }else{
        review.likedBy.push($scope.userId);
        $scope.totalLikes = $scope.totalLikes + 1;
        $http({
          method: 'PUT',
          url: `/api/movies/${review.movieId}/reviews/${review._id}`,
          data: review
        }).then(() => $state.go('profileShow', { id: $state.params.id }));
      }
    }
  };
}


export default profileCtrl;
