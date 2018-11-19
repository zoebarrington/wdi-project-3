function registerCtrl($scope, $state, $auth) {
  $scope.handleRegister = function() {
    console.log('Registered!');
    $auth.signup($scope.user)
      .then(() => $state.go('login'))
      .catch(err => console.log('there was an error', err));
  };
}

export default registerCtrl;
