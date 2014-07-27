angular.module('models.job', [])
.factory('Job', function($resource) {
  var Job = $resource('/api/v1/jobs/:id', {id:'@id'}, {
    update: { method: 'PUT' },
    delete_job: { method: 'DELETE' }
  });
  return Job
})
.service('popupService',function($window){
  this.showPopup=function(message){
    return $window.confirm(message);
  }
})
;
