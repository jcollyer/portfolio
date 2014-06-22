angular.module('models.jobs', [])
  .factory('Jobs', function($resource) {
    return $resource('/api/v1/jobs/:id', {
      update: {
        method: 'PUT'
      }
    });
  });
;
