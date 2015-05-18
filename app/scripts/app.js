/* global app: true */
/* exported app */

'use strict';

/**
 * @ngdoc overview
 * @name thinksterTutApp
 * @description
 * # thinksterTutApp
 *
 * Main module of the application.
 */
var app = angular
  .module('thinksterTutApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

