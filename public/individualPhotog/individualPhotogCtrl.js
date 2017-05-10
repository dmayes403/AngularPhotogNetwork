angular.module('photogNetwork')
    .controller('individualPhotogCtrl', function($scope, individualPhotogSrvc, $stateParams){

        $scope.getIndividualPhotog = function(){
          console.log($stateParams.id)
            individualPhotogSrvc.getIndividualPhotog($stateParams.id).then(function(response){
              $scope.individualPhotog = response;
              console.log($scope.individualPhotog[0]);
            })
        }

        $scope.getIndividualPhotog();

        $scope.getSessionImages = function(photog_id, genre_type){
          console.log('working');
          console.log(photog_id, genre_type);
          individualPhotogSrvc.getSessionImages(photog_id, genre_type).then(function(response){
            $scope.sessionImages = response;
          })
        }
    })
