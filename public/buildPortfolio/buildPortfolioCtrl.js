angular.module('photogNetwork')
    .controller('buildPortfolioCtrl', function($scope, buildPortfolioSrvc){
      console.log('running through ctrl')
        $scope.postToVendor = function(firstName, lastName, profilepic, business, state, city, email, phone, username, password){
          buildPortfolioSrvc.postToVendor(firstName, lastName, profilepic, business, state, city, email, phone, username, password)
          $scope.firstName = '';
          $scope.lastName = '';
          $scope.profilepic = '';
          $scope.business = '';
          $scope.state = '';
          $scope.city = '';
          $scope.email = '';
          $scope.phone = '';
          $scope.username = '';
          $scope.password = '';
        }
    })
