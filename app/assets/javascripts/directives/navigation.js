angular.module('directive.navigation',[])
.controller('navigationCtrl', function($scope, Job){
  $scope.jobs = Job.query();

  $scope.showJob = function(job){
    $scope.job = job;
    var showDiv = angular.element(document.querySelector( '#show-job' ));
    showDiv.html(job.title);
  };
  $scope.clickJob = function(){
    var menu = angular.element( document.querySelector( '.jc-nav' ));
    var button = angular.element( document.querySelector( '.list-icon' ));
    button.removeClass("fontawesome-angle-left").addClass("fontawesome-angle-right");
    menu.css("left", "-400px");
    opened = false
  };
})
.directive('navigation', function(){
  return {
    restrict: 'A',
    templateUrl: 'navigation.html',
    controller: 'navigationCtrl',
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
          menu.css("left", "-400px");
          opened = false
        }
      });
    }
  }
})
