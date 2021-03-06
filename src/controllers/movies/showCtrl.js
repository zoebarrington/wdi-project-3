
function showCtrl($scope, $http, $state, $auth) {
  $http({
    method: 'GET',
    url: `/api/movies/${$state.params.id}`
  }).then(result => {
    $scope.movie = result.data;
  });

  $scope.createReview = function() {
    console.log($scope.review);
    $scope.review.createdBy = $scope.userId;
    $http({
      method: 'POST',
      url: `/api/movies/${$state.params.id}/reviews`,
      data: $scope.review
    }).then(result => $scope.movie = result.data);
  };

  $scope.deleteReview = function(review) {
    $http({
      method: 'DELETE',
      url: `/api/movies/${$state.params.id}/reviews/${review._id}`
    }).then(result => $scope.movie = result.data);
  };

  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/movies/${$scope.movie._id}`
    }).then(() => $state.go('movieIndex'));
  };

  $scope.notReviewed = function(){
    for(let i = 0; i < $scope.movie.reviews.length; i++){
      if($scope.movie.reviews[i].createdBy._id === $scope.userId){
        return false;
      }
    }
    return true;
  };

  $scope.editReview = function(review){
    $scope.yourReview = review;
    $scope.editing = true;
  };

  $scope.updateReview = function(){
    $scope.editing = false;
    $http({
      method: 'PUT',
      url: `/api/movies/${$state.params.id}/reviews/${$scope.yourReview._id}`,
      data: $scope.yourReview
    }).then(result =>  {
      $scope.movie = result.data;
    });
  };

  $scope.like = function(review){
    if($auth.isAuthenticated() && review.createdBy._id !== $scope.userId){
      if(review.likedBy.includes($scope.userId)){
        const index = review.likedBy.indexOf($scope.userId);
        review.likedBy.splice(index, 1);
        $http({
          method: 'PUT',
          url: `/api/movies/${$state.params.id}/reviews/${review._id}`,
          data: review
        }).then(() => $state.go('movieShow', { id: $state.params.id }));
      }else{
        review.likedBy.push($scope.userId);
        $http({
          method: 'PUT',
          url: `/api/movies/${$state.params.id}/reviews/${review._id}`,
          data: review
        }).then(() => $state.go('movieShow', { id: $state.params.id }));
      }
    }
  };
}

export default showCtrl;
