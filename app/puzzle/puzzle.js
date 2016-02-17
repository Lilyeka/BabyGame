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

angular.module('myApp.puzzle', ['ngRoute'])

.controller('PuzzleCtrl', function($scope, $http, $location,$timeout) {



	$scope.puzzleimg = 'img/12.jpg';

	var vegetables = [{
		"name": "Carrot"
	}, {
		"name": "Potato"
	}, {
		"name": "Broccoli"
	}];

	$scope.veggies1 =[];
	//$scope.veggies = vegetables;


	$scope.setImage = function(gridSize) {
		window.alert("Hellow!!!");

		for (var i = 0; i < 9; i++) {
			$scope.veggies1.push($scope.veggies1.length);
		}
			//	$scope.xpositions[i] =
		//Var percentage = 100 / (gridSize - 1);
		//var image = puzzleimg;//images[Math.floor(Math.random() * images.length)];
        //
		//for (var i = 0; i < gridSize * gridSize; i++) {
		//	$scope.xpositions[i] = (percentage * (i % gridSize));
		//	$scope.ypositions[i] = (percentage * Math.floor(i / gridSize));
        //
		//	var li = $('<li class="item" data-value="' + (i) + '"></li>').css({
		//		'background-image': 'url(' + image.src + ')',
		//		'background-size': (gridSize * 100) + '%',
		//		'background-position': xpos + ' ' + ypos,
		//		'width': 400 / gridSize,
		//		'height': 400 / gridSize
		//	});
		//	$('#sortable').append(li);
		//}
		//$('#sortable').randomize();

	};
 /*$http.get(nameFile).success(function(data){
	$scope.questions = randomize(data);
	$scope.questions[0].fade = true;
	
	
 });   
 $scope.i = 0;
 
 
 $scope.setAnswer = function(answ,quests){
		$scope.mainAnswer = answ;
		if($scope.i + 1 <quests.length){
			$scope.i = $scope.i + answ;
			if($scope.mainAnswer > 0) {
				$timeout(function() {
					quests[$scope.i].fade = true;	
          				}, 100);
				}
			}
		else{ 
			if (answ == 1) {
			$location.path( "/view2" );
		}
	 }
	}; 
*/
});

















