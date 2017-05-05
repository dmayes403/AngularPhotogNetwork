angular.module('photogNetwork')
    .service('genresSrvc', function($http){
        this.getGenre = function(genreType){
          return $http.get('/getGenre?genreType=' + genreType).then(function(response){
            return response.data;
          })
        }
    })
