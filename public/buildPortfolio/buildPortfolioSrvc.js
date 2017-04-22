angular.module('photogNetwork')
    .service('buildPortfolioSrvc', function($http){
      console.log('running through service')
        this.postToVender(firstName, lastName, profilepic, business, state, city, email, phone, username, password){
          return $http.post('/createVendor', {firstName, lastName, profilepic, business, state, city, email, phone, username, password})
        }
    })
