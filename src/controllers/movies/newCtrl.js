function newCtrl($scope, $http, $state){
  $scope.handleSubmit = function (){
    console.log('handleSubmit');
    $http({
      method: 'POST',
      url: '/api/movies',
      data: $scope.movie
    }).then(result => $state.go('movieShow', { id: result.data._id }));
  };
}

export default newCtrl;
