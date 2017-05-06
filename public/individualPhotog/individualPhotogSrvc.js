angular.module('photogNetwork')
    .service('individualPhotogSrvc', function($http){

        this.getIndividualPhotog = function(photogId){
          return $http.get('/getIndividualPhotog' + photogId).then(function(response){
            return response;
          })
        }
    })
