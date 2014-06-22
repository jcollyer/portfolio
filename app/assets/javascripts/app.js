angular.module('portfolio', [
  'ngResource',
  'ui.router',
  'templates',
  'models.jobs'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('jobs', {
      url: '/jobs',
      templateUrl: 'partials/jobs.html',
      controller: 'JobListController'
    }).state('viewJob', { //state for showing single job
      url: '/jobs/:id/view',
      templateUrl: 'partials/job-view.html',
      controller: 'JobViewController'
    }).state('newJob', { //state for adding a new job
      url: '/jobs/new',
      templateUrl: 'partials/job-add.html',
      controller: 'JobCreateController'
    }).state('editJob', { //state for updating a job
      url: '/jobs/:id/edit',
      templateUrl: 'partials/job-edit.html',
      controller: 'JobEditController'
    });
    $urlRouterProvider.otherwise('/');
})

.controller('JobListController', function($scope, Jobs){
  var job = this;

  $scope.jobs = [];

  Jobs.get().$promise.then(function(res){
    $scope.jobs = res.jobs;
  });

})
;
