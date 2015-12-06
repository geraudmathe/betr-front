// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular
  .module('betr', ['ionic', 'ui.router', 'angular-jwt', 'ngResource'])
  .config(MainConfig)
  .constant('API', 'https://567fbefd.ngrok.com/')
  .filter('capitalize', function() {
    return function(input) {
      if(input != null) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
      }
    }
  })
  .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


function MainConfig($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('landing', {
    url: '/',
    templateUrl: 'landing.html',
  })
  .state('swipe', {
    url: '/swipe',
    templateUrl: 'swipe.html',
  })
  .state('confirmation', {
    url: '/confirmation',
    templateUrl: 'confirmation.html',
    params: {
      current: {}
    },
    controller: 'currentController';
  });

  $urlRouterProvider.otherwise('/');

  $httpProvider.interceptors.push('authInterceptor');
};
