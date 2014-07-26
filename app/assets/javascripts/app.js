angular.module('portfolio', [
  'ngResource',
  'ui.router',
  'templates',
  'models.job',
  'directives.all',
  'ng-rails-csrf'
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'index.html'
    })
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

.controller('JobListController', function($scope, Job, popupService){

  // $scope.jobs = [];

  Job.get().$promise.then(function(res){
    $scope.jobs = res.jobs;
  });
  // $scope.jobs = Job.query(); //fetch all jobs. Issues a GET to /api/v1/jobs

  $scope.deleteJob = function(job) {
    if (popupService.showPopup('Really delete this?')) {
      job.$delete(function() {
        $window.location.href = '';
      })
    }
  }
})
.controller('JobViewController', function($scope, $stateParams, Job) {
  var jobCtrl = this;

  jobCtrl.jobs = [];
  thisId = $stateParams.id - 1;
  // thisJob = {};
  Job.get().$promise.then(function(res){
    jobCtrl.job = res.jobs[0];
  });
})
.controller('JobCreateController', function($scope, Job, $state) {
  $scope.job = new Job();

  $scope.addJob = function() {
    $scope.job.$save().then(function() {
      $state.go('jobs');
    });
  };
})
.controller('JobEditController', function($scope, $state, $stateParams, Job) {
  $scope.updateJob = function() { //Update the edited job. Issues a PUT to /api/v1/jobs/:id
    // debugger
    $scope.job.$save(function() {
      $state.go('jobs'); // on success go back to home i.e. jobs state.
    });
  };

  $scope.loadJob = function() { //Issues a GET request to /api/v1/jobs/:id to get a job to update
    $scope.job = Job.get({ id: $stateParams.id });
  };

  $scope.loadJob(); // Load a job which can be edited on UI
})
;
