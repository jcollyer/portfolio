angular.module('directive.navigation',[])
.controller('navigationCtrl', function($scope, Job){
  $scope.jobs = Job.query();

  $scope.showJob = function(job){
    $scope.job = job;
    var showDiv = angular.element(document.querySelector( '#show-job' ));
    showHtml ='<div class="job">' +
                '<div class="job-logo"><img src="'+job.icon+'"></div>' +
                '<div class="title"><h1>'+job.title+'</h1></div>' +
                '<div class="url"><a href="'+job.url+'">'+job.url+'</a></div>' +

                ' <div class="monitor"> ' +
                '   <img src="'+job.image+'" /> ' +
                '   <span class="stand"></span> ' +
                ' </div> ' +
                ' <div class="laptop"> ' +
                '   <img src="'+job.lap+'" /> ' +
                '   <span class="laptop-bits"></span> ' +
                ' </div> ' +
                ' <div class="phone"> ' +
                '   <img src="'+job.phone+'" /> ' +
                '</div> ' +


              '</div>';
    showDiv.html(showHtml);
  };
  $scope.clickJob = function(){
    var button = angular.element( document.querySelector( '#nav-toggle' ));
    var mainPage = angular.element( document.querySelector( '#main-page' ));
    button.removeClass("active");
    mainPage.css("width", "100%");
    opened = false;
  };
})
.directive('navigation', function(){
  return {
    restrict: 'A',
    templateUrl: 'navigation.html',
    controller: 'navigationCtrl',
    link: function() {
      var button = angular.element( document.querySelector( '#nav-toggle' ));
      var mainPage = angular.element( document.querySelector( '#main-page' ));
      var nav = angular.element( document.querySelector( '#nav' ));
      opened = false;
      button.on('click', function(){
        if (opened === false ) {
          button.addClass("active");
          nav.css("width","100%");
          mainPage.css("width", "85%");
          opened = true;
        } else {
          button.removeClass("active");
          nav.css("width","85%");
          mainPage.css("width", "100%");
          opened = false
        }
      });
    }
  }
})
