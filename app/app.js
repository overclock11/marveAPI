'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ngMaterial',
  'angular-md5'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
value('marvelCons',{
  URL_BASE_SERVICIOS:"https://gateway.marvel.com:443/v1/public/characters",
  PUBLIC_KEY:"af27f323f1b78e6be9e6b1bdde7f06fe",
  PRIVATE_KEY:"81664c63b8179513f64e658266f26d2e497a5b1d"
});
