angular.module('portfolio', [
  'ngResource',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
     .state('/', {
       url: "/",
       templateUrl: "home.html"
     });
})
;
