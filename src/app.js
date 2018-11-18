import angular from 'angular';
import '@uirouter/angularjs';
import 'bulma';
import './scss/style.scss';
import Router from './config/router';



angular.module('filmSpotting', ['ui.router'])
  .config(Router);
