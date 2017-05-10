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

        $scope.getSessionImages = function(photo_id, genre_type){
          this.getSessionImages(photo_id, genre_type).then(function(response){
            $scope.sessionImages = response;
          })

        }
    })
