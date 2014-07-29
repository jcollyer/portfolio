angular.module('portfolio', [
  'ngResource',
  'ui.router',
  'templates',
  'models.job',
  'directives.all',
  'ng-rails-csrf',
  'angularFileUpload'
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

.controller('JobsController', function($scope, $state, Job, popupService, $window, $upload){

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

  $scope.onFileSelect = function($files) {
     //$files: an array of files selected, each file has name, size, and type.
     for (var i = 0; i < $files.length; i++) {
       var file = $files[i];
       debugger;
       $scope.upload = $upload.upload({
         url: '/api/v1/jobs/' + $scope.job.id,
         method: 'PUT',
         //headers: {'header-key': 'header-value'},
         headers: {'Content-Type': undefined},
         //withCredentials: true,
         // data: {job: $scope.job.id},
         file: file // or list of files ($files) for html5 only
         //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
         // customize file formData name ('Content-Desposition'), server side file variable name.
         //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file'
         // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
         //formDataAppender: function(formData, key, val){}
       }).progress(function(evt) {
         console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
       }).success(function(data, status, headers, config) {
         // file is uploaded successfully
         console.log("yaya!");
       });
       //.error(...)
       //.then(success, error, progress);
       // access or attach event listeners to the underlying XMLHttpRequest.
       //.xhr(function(xhr){xhr.upload.addEventListener(...)})
     }
     /* alternative way of uploading, send the file binary with the file's content-type.
        Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.
        It could also be used to monitor the progress of a normal http post/put request with large data*/
     // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
   };

})
;
