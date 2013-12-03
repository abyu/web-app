'use strict';

// Declare app level module which depends on filters, and services
angular.module('webApp', [
  'ngRoute',
  'webApp.filters',
  'webApp.services',
  'webApp.directives',
  'webApp.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'Greet'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'Greet'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'Home'})
  $routeProvider.otherwise({redirectTo: '/home'});

 $locationProvider.html5Mode(true);
}]);
