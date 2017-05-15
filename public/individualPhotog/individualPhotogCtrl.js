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
          individualPhotogSrvc.getSessionImages(photog_id, genre_type).then(function(response){
            $scope.sessionImages = response;
          })
        }

        $scope.genre_type_1 = false;
        $scope.genre_type_2 = false;

        $scope.currentImage = 0;
        $scope.currentPic = function(){
          $scope.currentImage++;
          if($scope.currentImage >= $scope.sessionImages.length){
            $scope.currentImage = 0;
          }
        }

    })
