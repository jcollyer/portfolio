angular.module('directive.navigation',[])
.controller('jobCtrl', function($scope, Job){

  Job.get().$promise.then(function(res) {
   $scope.jobs = res.jobs;
  });
})
.directive('navigation', function(){
  return {
    restrict: 'A',
    templateUrl: 'navigation.html',
    controller: 'jobCtrl',
    link: function() {
      var button = angular.element( document.querySelector( '.list-icon' ));
      var menu = angular.element( document.querySelector( '.jc-nav' ));
      var opened = false;
      button.on('click', function(){
        if (opened === false ) {
          button.removeClass("fontawesome-angle-right").addClass("fontawesome-angle-left");
          menu.css("left", "0px");
          opened = true;
        } else {
          button.removeClass("fontawesome-angle-left").addClass("fontawesome-angle-right");
          menu.css("left", "-350px");
          opened = false
        }
      });
    }
  }
})
