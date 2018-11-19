
function showCtrl($scope, $http, $state) {
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
  $scope.deleteme = function() {
    console.log($scope.review);
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
}

export default showCtrl;
