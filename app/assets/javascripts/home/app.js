angular.module('portfolio', [
  'ngResource',
  'ui.router',
  'templates'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
     .state('/', {
       url: '/',
       templateUrl: "index.html"
     });
})
;
