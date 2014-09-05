angular.module('directive.navigation',[])
.controller('navigationCtrl', function($scope, Job){
  $scope.jobs = Job.query();

  $scope.showJob = function(job){
    $scope.job = job;
    var showDiv = angular.element(document.querySelector( '#show-job' ));
    showHtml ='<div class="job">' +
                '<div class="title"><h1>'+job.title+'</h1></div>' +
                '<div class="url"><a href="http://www.gopro.com">'+job.url+'</a></div>' +

                ' <div class="phone"></div> ' +
                ' <div class="monitor"> ' +
                '   <img src="'+job.image+'" /> ' +
                '   <span class="stand"></span> ' +
                ' </div> ' +
                ' <div class="laptop"> ' +
                '   <span class="laptop-bits"></span> ' +
                ' </div> ' +


              '</div>';
    showDiv.html(showHtml);
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
