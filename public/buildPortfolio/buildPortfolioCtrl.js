angular.module('photogNetwork')
    .controller('buildPortfolioCtrl', function($scope, buildPortfolioSrvc){
      console.log('running through ctrl')
        $scope.postToVender = function(firstName, lastName, profilepic, business, state, city, email, phone, username, password){
          buildPortfolioSrvc.postToVender(firstName, lastName, profilepic, business, state, city, email, phone, username, password)
        }
    })
