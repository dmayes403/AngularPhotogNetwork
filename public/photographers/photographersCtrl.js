angular.module('photogNetwork')
    .controller('photographersCtrl', function($scope, photographersSrvc){
        $scope.getPhotographers = function(){
          photographersSrvc.getPhotographers().then(function(response){
            $scope.photographers = response;
            console.log($scope.photographers)
          });
        }

        $scope.getPhotographers();
    })
