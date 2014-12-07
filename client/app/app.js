angular.module('pledgr', [
  'pledgr.home',
  'pledgr.signup',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
//.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController'
    })
    // .state('signin', {
    //   url: '/signin',
    //   templateUrl: 'app/auth/signin.html',
    //   controller: 'AuthController'
    // })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/signup/signup.html',
      controller: 'SignupController'
    });
    // .state('charities', {
    //   url: '/charities',
    //   templateUrl: 'app/charities/charities.html',
    //   controller: 'CharitiesController'
    // });

    // $httpProvider.interceptors.push('AttachTokens');
});
