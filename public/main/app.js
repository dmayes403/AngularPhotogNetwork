angular.module('photogNetwork',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
          .state('home', {
            url: '/',
            templateUrl: '../home/home.html',
            controller: 'homeCtrl'
          })
          .state('buildPortfolio', {
            url: '/buildPortfolio',
            templateUrl: '../buildPortfolio/buildPortfolio.html',
            controller: 'buildPortfolioCtrl'
          })
          .state('photographers', {
            url: '/photographers',
            templateUrl: '../photographers/photographers.html',
            controller: 'photographersCtrl'
          })
          .state('genres', {
            url: '/genres?genreType',
            templateUrl: '../genres/genres.html',
            controller: 'genresCtrl'
          })
          .state('individualPhotog', {
            url: '/individualPhotog/:id',
            templateUrl: '../individualPhotog/individualPhotog.html',
            controller: 'individualPhotogCtrl'
          })

          $urlRouterProvider.otherwise('/');
    })
