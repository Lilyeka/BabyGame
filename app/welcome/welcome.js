'use strict';

angular.module('myApp.welcome', ['ngRoute'])

/*.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])*/

.controller('WelcomeCtrl', function($location) {
 // $location.path( "/view1" );
});