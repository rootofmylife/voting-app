(function() {
  var app = angular.module('app', ['ngRoute', 'angular-jwt']);  
  
  app.config(function($routeProvider, $locationProvider){
      $locationProvider.html5mode(true);
      $routeProvider.when('/', {
          templateUrl: './templates/main.html',
          controller: 'MainController',
          controllerAs: 'vm'
      });
      
      $routeProvider.when('/loginapp', {
          templateUrl: './templates/loginapp.html',
          controller: 'LoginController',
          controllerAs: 'vm'
      });
      
      $routeProvider.when('/registerapp', {
          templateUrl: './templates/registerapp.html',
          controller: 'RegisterController',
          controllerAs: 'vm'
      });
      
      $routeProvider.when('/polls', {
          templateUrl: './templates/polls.html',
          controller: 'PollsController',
          controllerAs: 'vm'
      });
      
      $routeProvider.when('/polls/:id', {
          templateUrl: './templates/poll.html',
          controller: 'PollController',
          controllerAs: 'vm'
      });
      
      $routeProvider.when('/profile', {
          templateUrl: './templates/profile.html',
          controller: 'ProfileController',
          controllerAs: 'vm'
      });
  });
  
  app.controller('MainController', MainController);
  
  function MainController($loction, $window){
      
  }
  
  app.controller('LoginController', LoginController);
  
  function LoginController($loction, $window){
      var vm = this;
      vm.title = "LoginController";
  }
  
  app.controller('RegisterController', RegisterController);
  
  function RegisterController($loction, $window){
      var vm = this;
      vm.title = "RegisterController";
  }
  
  app.controller('ProfileController', ProfileController);
  
  function ProfileController($loction, $window){
      var vm = this;
      vm.title = "ProfileController";
  }
  
  app.controller('PollsController', PollsController);
  
  function PollsController($loction, $window){
      var vm = this;
      vm.title = "PollsController";
  }
  
  app.controller('PollController', PollController);
  
  function PollController($loction, $window){
      var vm = this;
      vm.title = "PollController";
  }
}())