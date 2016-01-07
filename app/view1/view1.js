'use strict';

//randomize = function(data)
//{
//var qwests = [];
//function getRandomInt(min, max) 
//{ 
//	return Math.floor(Math.random() * (max - min + 1)) + min; 
//} 
	
//}
angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', function($scope, $http, $location) {
 $http.get('imgs.json').success(function(data){
	$scope.questions = data;  
 });   
 $scope.i = 0;
 $scope.randomInt = 0;
 $scope.setRandomInt = function(min,max){
 	$scope.randomInt = Math.floor(Math.random() * (max - min + 1)) + min;	
 }
 $scope.setAnswer = function(answ,quests){
		$scope.mainAnswer = answ;
		if($scope.i + 1 <quests.length){
				$scope.i = $scope.i + answ;
			}
		else{ 
			if (answ == 1) {
			$location.path( "/view2" );
		}
	 }
	}; 

});
