import angular from 'angular';
import '@uirouter/angularjs';
import 'bulma';
import 'satellizer';
import './scss/style.scss';
import Router from './config/router';

import mainCtrl from './controllers/mainCtrl';


angular.module('filmSpotting', ['ui.router', 'satellizer'])
  .config(Router)
  .controller('mainCtrl', mainCtrl)
  .config(function($authProvider) {
    $authProvider.signupUrl = '/api/register';
    $authProvider.loginUrl = '/api/login';
  });
