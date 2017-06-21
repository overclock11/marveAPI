'use strict';

var marvel = angular.module('myApp.view1', ['ngRoute']);

marvel.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

marvel.controller('View1Ctrl', ["$scope","servicioPersonajes",function($scope,servicioPersonajes) {
  servicioPersonajes.traerPersonajes().then((datos)=>{
    console.log(datos);
  });
}]);
