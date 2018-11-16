import angular from 'angular';
import '@uirouter/angularjs';

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/'
    });
  $urlRouterProvider.otherwise('/');
}

angular.module('filmSpotting', ['ui.router'])
  .config(Router);
