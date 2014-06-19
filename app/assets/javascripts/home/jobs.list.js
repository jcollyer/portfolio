angular.module('jobs.list', [
  'ngResource',
  'ui.router',
  'templates',
  'models.jobs'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
     .state('jobs.list', {
        url: '/:id',
        templateUrl: "jobs.list.html",
        controller: 'JobsListCtrl as jobslist'
     });
})
.controller('JobsListCtrl', function($scope, $stateParams, $state){
  $scope.id = $stateParams.id;
})
;
