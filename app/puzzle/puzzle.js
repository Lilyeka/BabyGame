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
	$scope.veggies1 =[];
	$scope.gridSize = 0;


	$scope.myStyle = {
		//"background-color": "red",
		"background-image": 'url(' + $scope.puzzleimg + ')',
		"background-size": $scope.gridSize*100 + '%',
		"width": 400 / $scope.gridSize,
		"height": 400 / $scope.gridSize
	}

	$scope.setImage = function(gridSize) {
		window.alert("Hellow!!!");
		$scope.gridSize = gridSize;
		for (var i = 0; i < 9; i++) {
		//if ($scope.i<9){
			$scope.veggies1.push($scope.veggies1.length);
			$scope.i = $scope.i + 1;
		//}
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

















