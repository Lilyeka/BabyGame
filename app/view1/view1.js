'use strict';
//вернет целое случайное число в пределах мин и макс
function getRandomInt(min, max) 
{ return Math.floor(Math.random() * (max - min + 1)) + min; 
}
//рандомизируем элементы в массиве
function randomize(data)
{
var qwests = [];
var rand =0;
while(data.length > 0){
	rand = getRandomInt(0,data.length-1); 
	qwests.push(data[rand]);
	data.splice(rand, 1);

}
return qwests;
}

angular.module('myApp.view1', ['ngRoute','ngAnimate'])

.controller('View1Ctrl', function($scope, $http, $location) {
 $http.get('imgs.json').success(function(data){
	$scope.questions = randomize(data);
	alert('Привет, букет!');
 });   
 $scope.i = 0;
 
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

})

.animation('.hide-animation', function () {
  return {
    beforeAddClass : function(element, className, done) {
      if (className === 'ng-hide') {
        element.animate({
          opacity: 0
        },500, done);
      } else {
        done();
      }
    },
    removeClass : function(element, className, done) {
      if (className === 'ng-hide') {
      element.css('opacity',0);
      element.animate({
          opacity: 1
        }, 500, done);
      } else {
        done();
      }
    }
  };
});
