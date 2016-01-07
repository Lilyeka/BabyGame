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

angular.module('myApp.view1', ['ngRoute'])

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

.animation('.repeat-animation', function () {
  return {
    enter : function(element, done) {
      console.log("entering...");
      var width = element.width();
      element.css({
        position: 'relative',
        left: -10,
        opacity: 0
      });
      element.animate({
        left: 0,
        opacity: 1
      }, done);
    },
    leave : function(element, done) {
      element.css({
        position: 'relative',
        left: 0,
        opacity: 1
      });
      element.animate({
        left: -10,
        opacity: 0
      }, done);
    },
    move : function(element, done) {
      element.css({
        left: "2px",
        opacity: 0.5
      });
      element.animate({
        left: "0px",
        opacity: 1
      }, done);
    }
  };
});
