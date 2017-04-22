angular.module('photogNetwork')
    .service('buildPortfolioSrvc', function($http){
      console.log('running through service')
        this.postToVendor = function(firstName, lastName, profileURL, businessName, state, city, email, phone, username, password){
          // return $http.post('/createVendor', {firstName:firstName, lastName:lastName, profileURL:profileURL, businessName:businessName,
          //   state:state, city:city, email:email, phone:phone, username:username, password:password})
          return $http.post('/createVendor', {firstName, lastName, profileURL, businessName,
            state, city, email, phone, username, password})
        }
    })
