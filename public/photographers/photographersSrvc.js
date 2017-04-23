angular.module('photogNetwork')
    .service('photographersSrvc', function($http){
        this.getPhotographers = function(){
          return $http.get('/getPhotographers').then(function(response){
            return response.data;
          })
        }
    })
