angular.module('portfolio', [
  'ngResource',
  'ui.router',
  'templates',
  'models.jobs'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
     .state('/', {
        url: '/',
        templateUrl: "jobs.html",
        controller: 'JobsCtrl as jobs'
     });
})
.controller('JobsCtrl', function($scope, Jobs){
  var job = this;

  $scope.jobs = [];

  Jobs.get().$promise.then(function(res){
    $scope.jobs = res.jobs;
  });

})
;
