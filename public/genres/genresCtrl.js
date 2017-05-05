angular.module('photogNetwork')
    .controller('genresCtrl', function($scope, $stateParams, genresSrvc){
      console.log($stateParams)
        $scope.getGenre = function(){
          genresSrvc.getGenre($stateParams.genreType)
        }

        $scope.getGenre();
    })
