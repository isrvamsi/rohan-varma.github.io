var myApp=angular.module("myApp", []);

myApp.controller("myController", function($scope){
    
    $scope.navOptions=[
        {
            name: "Home",
            link: "index.html"
        },
        {
            name: "About",
            link: "about.html"
        },
        {
            name: "FAQ",
            link: "faq.html"
        },
        {
            name: "Finances",
            link: "finances.html"
        },
        {
            name: "Contact",
            link: "contact.html"
        },
        {
            name: "Vote",
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