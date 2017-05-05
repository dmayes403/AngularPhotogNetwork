angular.module('photogNetwork')
    .controller('genresCtrl', function($scope, $stateParams, genresSrvc){
        $scope.getGenre = function(){
          return genresSrvc.getGenre($stateParams.genreType).then(function(response){
            console.log(response)
            $scope.genrePhotographers = response;
          })
        }

        $scope.getGenre();
    })
