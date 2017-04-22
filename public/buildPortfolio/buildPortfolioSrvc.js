angular.module('photogNetwork')
    .service('buildPortfolioSrvc', function($http){
      console.log('running through service')
        this.postToVendor = function(firstName, lastName, profilepic, business, state, city, email, phone, username, password){
          // console.log(firstName, lastName, profilepic, business, state, city, email, phone, username, password)
          return $http.post('/createVendor', {firstName:firstName, lastName:lastName, profilepic:profilepic, business:business,
            state:state, city:city, email:email, phone:phone, username:username, password:password})
        }

        // this.postToVendor = function(firstName, lastName, profilepic, business, state, city, email, phone, username, password){
        //   return $http.get('/createVendor').then(function(response){
        //     console.log(response);
        // })
        // }
    })
