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
  var jobs = Jobs.query(function(){
    jobs.forEach(function(job){
      var id = job.id;
      var title = job.title;
      var position = job.position;
      var show = job.show;
      var url = job.url;
    });
  });
})
;
