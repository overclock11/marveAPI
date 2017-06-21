marvel.service("servicioPersonajes",["$http","marvelCons","md5","$q",function($http,marvelCons,md5,$q){
  var vm = this;
  vm.traerPersonajes = function (){
    var defered = $q.defer();
    var promise = defered.promise;
    var timestamp = Date.now();

    $http.get(marvelCons.URL_BASE_SERVICIOS,{
      params:{
        limit:10,
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

  // var defered = $q.defer();
  // var promise = defered.promise;
  // var url =urlMaster;
  // $http({
  //     method: 'POST',
  //     url: url,
  //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  //     transformRequest: function(obj) {
  //         var str = [];
  //         for(var p in obj)
  //         str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  //         return str.join("&");
  //     },
  //     data: {"details":datosCifrados}
  // })
  // .then(function (datos) {
  //     defered.resolve(datos);
  // })
  // .catch(function(err){
  //   // el servicio de control de errores debe estar en el controlador
  //     defered.reject(err)
  // });
  // return promise;

}]);
