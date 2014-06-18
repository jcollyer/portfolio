angular.module('jobs.list', [
  'ngResource',
  'ui.router',
  'templates',
  'models.jobs'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
     .state('home.list', {
        url: '/list',
        templateUrl: "jobs.list.html",
        controller: 'JobsListCtrl as jobslist'
     });
})
.controller('JobsListCtrl', function($scope){
  // debugger
})
;
