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

.controller('JobListController', function($scope, $state, Job, popupService){
  $scope.jobs = Job.get().$promise.then(function(res){
    $scope.jobs = res.jobs;
  });

  $scope.deleteJob = function(job) {
    if (popupService.showPopup('Really delete this?')) {
      // debugger;
      job.$delete_job().then(function() {
        $window.location.href = '';
      });
    }
  }
})

.controller('JobViewController', function($scope, $stateParams, Job) {
  $scope.job = Job.get().$promise.then(function(res){
    thisId = $stateParams.id -1;
    $scope.job = res.jobs[thisId];
  });


  // $scope.job=Job.get({id:$stateParams.id});
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
  $scope.loadJob = function(){
    $scope.job = Job.get({id:$stateParams.id});
    // debugger;

  };

  $scope.loadJob();

  // $scope.job = Job.get().$promise.then(function(res){
  //   thisId = $stateParams.id -1;
  //   $scope.job = res.jobs[thisId];
  // });

  $scope.updateJob = function(job) {
    // debugger;
    job.$update().then(function() {
      // debugger;
      $state.go('jobs');
    });
  };


})
;
