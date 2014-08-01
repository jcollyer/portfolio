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
      templateUrl: 'jobs.html',
      controller: 'JobsController'
    });
    $urlRouterProvider.otherwise('/');
})

.controller('JobsController', function($scope, $state, Job, popupService, $window, $http, $stateParams){

  $scope.jobs = Job.query();
  $scope.job = new Job();

  $scope.save = function(job) {
    if ($scope.job.id) {
      Job.update({id: $scope.job.id}, $scope.job);
    } else {
      $scope.job.$save().then(function(response) {
        $scope.jobs.push(response)
      });
    }
    $scope.editing = false;
    $scope.job = new Job();
  };

  $scope.newJob    = function() {
    $scope.job = new Job();
    $scope.editing = false;
  };

  $scope.activeJob = function(job) {
    $scope.job = job;
    $scope.editing = true;
  };

  $scope.delete = function(job) {
    if (popupService.showPopup('Really delete this?')) {
      Job.delete(job);
      _.remove($scope.jobs, job);
    }
  };

  $scope.uploadFile = function(files) {
    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);
    debugger;
    $http.post("/api/v1/jobs/23", fd, {
      withCredentials: true,
      headers: {'Content-Type': undefined },
      transformRequest: angular.identity
    }).success( "...all right!..." ).error( "..damn!..." );

  };

})
;
