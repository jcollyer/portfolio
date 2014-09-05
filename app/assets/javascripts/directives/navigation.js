angular.module('directive.navigation',[])
.controller('navigationCtrl', function($scope, Job){
  $scope.jobs = Job.query();

  $scope.showJob = function(job){
    $scope.job = job;
    var showDiv = angular.element(document.querySelector( '#show-job' ));
    showDiv.html(job.title);
  };
  $scope.clickJob = function(){
    var button = angular.element( document.querySelector( '.arrow' ));
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
      var button = angular.element( document.querySelector( '.arrow' ));
      var mainPage = angular.element( document.querySelector( '#main-page' ));
      var nav = angular.element( document.querySelector( '#nav' ));
      var opened = false;
      button.on('click', function(){
        if (opened === false ) {
          button.removeClass("arrow-right").addClass("arrow-left");
          nav.css("width","100%");
          mainPage.css("width", "80%");
          opened = true;
        } else {
          button.removeClass("arrow-left").addClass("arrow-right");
          nav.css("width","70%");
          mainPage.css("width", "100%");
          opened = false
        }
      });
    }
  }
})
