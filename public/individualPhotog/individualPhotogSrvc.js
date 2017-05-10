angular.module('photogNetwork')
    .service('individualPhotogSrvc', function($http){

        this.getIndividualPhotog = function(photogId){
          console.log(photogId);
          return $http.get('/getIndividualPhotog/' + photogId).then(function(response){
            return response.data;
          })
        }

        this.getSessionImages = function(photog_id, genre_type){
          return $http.get('/getSessionImages?photog=' + photog_id + '&genre=' + genre_type).then(function(response){
            console.log(response);
            return response.data;
          })
        }
    })
