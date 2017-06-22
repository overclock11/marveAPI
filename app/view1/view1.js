'use strict';

var marvel = angular.module('myApp.view1', ['ngRoute']);

marvel.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

marvel.controller('View1Ctrl', ["$scope","servicioPersonajes","servicioComics","$mdDialog",function($scope,servicioPersonajes,servicioComics,$mdDialog) {
  servicioPersonajes.traerPersonajes().then((datos)=>{
    $scope.personajes = datos.data.data.results;
    console.log($scope.personajes);
  },(err) =>{console.log("rejected: ", err)});

  $scope.showAdvanced = function(ev,comic) {
    servicioComics.traerDetalleComic(comic.resourceURI).then((comic)=>{
      $scope.comic = comic.data.data.results[0];
      $mdDialog.show({
        controller: DialogController,
        locals:{comic:$scope.comic},
        templateUrl: 'view1/dialogs/addFavouriteDialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    })

  };

  function DialogController($scope, $mdDialog,comic) {
    $scope.comicSeleccionado = comic;
    console.log($scope.comicSeleccionado);
    $scope.hide = function() {
      function
    };

    $scope.agregar = function() {
      $mdDialog.cancel();
    };

    $scope.comprar = function() {
      $mdDialog.hide();
    };
  }
}]);
