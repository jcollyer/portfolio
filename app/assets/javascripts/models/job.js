angular.module('models.job', [])
.factory('Job', function($resource) {
  return $resource('/api/v1/jobs/:id', {id:'@id'}, {
    update: { method: 'PUT' },
    delete_job: { method: 'DELETE' }
  });
})
.service('popupService',function($window){
  this.showPopup=function(message){
      return $window.confirm(message);
  }
})
;
