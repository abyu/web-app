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
  $routeProvider.when('/about', {templateUrl: 'partials/about_us.html', controller: 'AboutUs'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact_us.html', controller: 'ContactUs'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'Home'})
  $routeProvider.otherwise({redirectTo: '/home'});

 $locationProvider.html5Mode(true);
}]);
