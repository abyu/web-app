'use strict';

/* Controllers */

angular.module('webApp.controllers', []).
  controller('AboutUs', ["$scope", function($scope) {
  	$scope.greet = "Hello";
  }]).
  controller('ContactUs', ["$scope", function($scope) {
  	$scope.greet = "Hello";
  }]).
  controller('Home', ["$scope", function($scope) {
  	$scope.origin_location = "Bangalore"
  }]).
  controller('Home1', ["$scope", "$routeParams", function($scope, $routeParams) {
    $scope.origin_location = $routeParams.name
  }]).
  controller('Header', ["$scope", function($scope){
  	$scope.navigations = [
  		{'url':'', 'display_text': 'Sign Up', 'separator': '|'},
      {'url':'', 'display_text': 'Sign In', 'separator': ''}
  	]
  }]).
  controller('Footer', ["$scope", function($scope) {
  	$scope.navigations = [
  		{'url': '/home', 'display_text': 'Home', 'separator': '|'},
  		{'url': '/about', 'display_text': 'About us', 'separator': '|'},
  		{'url': '', 'display_text': 'Privacy Policy', 'separator': '|'},
  		{'url': '', 'display_text': 'Terms and Conditions', 'separator': '|'},
  		{'url': '/contact', 'display_text': 'Contact us', 'separator': ''},
  	];
  }]);