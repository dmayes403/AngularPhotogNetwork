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

          $urlRouterProvider.otherwise('/');
    })
