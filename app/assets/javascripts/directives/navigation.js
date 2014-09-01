angular.module('directive.navigation',[])
.controller('navigationCtrl', function($scope, Job){
  $scope.jobs = Job.query();

  $scope.showJob = function(job){
    $scope.job = job;
    var showDiv = angular.element(document.querySelector( '#show-job' ));
    showDiv.html(job.title);
  };
  $scope.clickJob = function(){
    var button = angular.element( document.querySelector( '.list-icon' ));
    var mainPage = angular.element( document.querySelector( '#main-page' ));
    button.removeClass("fontawesome-angle-left").addClass("fontawesome-angle-right");
    mainPage.css("width", "100%");
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
      var mainPage = angular.element( document.querySelector( '#main-page' ));
      var opened = false;
      button.on('click', function(){
        if (opened === false ) {
          button.removeClass("fontawesome-angle-right").addClass("fontawesome-angle-left");
          mainPage.css("width", "65%");
          opened = true;
        } else {
          button.removeClass("fontawesome-angle-left").addClass("fontawesome-angle-right");
          mainPage.css("width", "100%");
          opened = false
        }
      });
    }
  }
})
