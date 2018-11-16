import angular from 'angular';
import '@uirouter/angularjs';
import 'bulma';
import './scss/style.scss';

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    });
  $urlRouterProvider.otherwise('/');
}

angular.module('filmSpotting', ['ui.router'])
  .config(Router);
