var myApp=angular.module("myApp", []);

myApp.controller("myController", function($scope){
    
    $scope.navOptions=[
        {
            name: "Home",
            link: "index.html"
        },
        {
            name: "About Me",
            link: "about.html"
        },
        {
            name: "Projects",
            link: "faq.html"
        },
        {
            name: "Research",
            link: "finances.html"
        },
        {
            name: "Contact",
            link: "contact.html"
        },
        {
            name: "Blog",
            link: "vote.html"
        },
    ];
    
    $scope.getOptions=function(){
        return this.navOptions;
    };

});

myApp.directive('ngNavBar', function() {
  return {
    restrict: 'A',
    templateUrl: 'nav-bar.html'
  }
});