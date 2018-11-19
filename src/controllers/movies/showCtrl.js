// function showCtrl($scope, $http, $state) {
//   $http({
//     method: 'GET',
//     url: `/api/movies/${$state.params.id}`
//   }).then(result => {
//     $scope.movie = result.data;
//   });
//   $scope.createReview = function() {
//     $scope.review.createdBy = $scope.userId;
//     $http({
//       method: 'POST',
//       url: `/api/movies/${$state.params.id}/reviews`,
//       data: $scope.review
//     }).then(result => $scope.movie = result.data);
//   };
//   $scope.handleDelete = function () {
//     $http({
//       method: 'DELETE',
//       url: `/api/movies/${$state.params.id}`
//     }).then(() => $state.go('movieIndex'));
//   };
// }

function showCtrl($state, $scope, $http) {
  $scope.review = {};
  $http({
    method: 'GET',
    url: `api/movies/${$state.params.id}`
  }).then(result => {
    $scope.movie = result.data;
  });

  $scope.createReview = function() {
    $http({
      method: 'POST',
      url: `/api/movies/${$state.params.id}/comments`,
      data: $scope.review
    }).then(result => {
      $scope.movie = result.data;
      $scope.review.content = null;
    });
  };
  $scope.deleteme = function() {
    console.log($scope.review);
  };

  $scope.deleteComment = function(review) {
    $http({
      method: 'DELETE',
      url: `/api/movies/${$state.params.id}/reviews/${review._id}`
    }).then(result => $scope.movie= result.data);
  };

  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/movies/${$scope.movie._id}`
    }).then(() => $state.go('movieIndex'));
  };
}

export default showCtrl;
