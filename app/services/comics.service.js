marvel.service("servicioComics",["$http","marvelCons","md5","$q",function($http,marvelCons,md5,$q){
  var vm = this;
  vm.traerDetalleComic = function (urlBase){
    var defered = $q.defer();
    var promise = defered.promise;
    var timestamp = Date.now();

    $http.get(urlBase,{
      params:{
        ts:timestamp,
        apikey:marvelCons.PUBLIC_KEY,
        hash:md5.createHash(timestamp+""+marvelCons.PRIVATE_KEY+""+marvelCons.PUBLIC_KEY)
      }
    })
    .then(function (datos) {
        defered.resolve(datos);
    })
    .catch(function(err){
      // el servicio de control de errores debe estar en el controlador
        defered.reject(err)
    });
    return promise;
  }

}]);
