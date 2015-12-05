// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular
  .module('betr', ['ionic', 'ui.router'])
  .config(MainRouter)
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

function MainRouter($stateProvider, $urlRouterProvider) {
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
  });

  $urlRouterProvider.otherwise('/');
};
