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
.directive("otcDynamic", function(parametr){
	return {
		template:parametr//"<button ng-click='doSomething()'>{{label}}</div>"
	};
})

//.directive("otcDynamic", function($compile){
//	return{
//		link: function(scope, element){
		//	for (var i = 0; i < 9; i++) {
		//	var template = "<button ng-click='doSomething()'>{{label}}</button>";
		//	var linkFn = $compile(template);
		//	var content = linkFn(scope);
		//	element.append(content);
		//}
	//}
//})
.controller('PuzzleCtrl', function($scope, $http, $location,$compile) {
	$scope.puzzleimg = 'img/12.jpg';
	$scope.veggies1 =[];
	$scope.gridSize = 0;

	$scope.label = "Please click";
	$scope.doSomething = function(){
		//for (var i = 0; i < 9; i++) {
		//	$scope.message = "Clicked!" + i;

		//}
		$scope.message = "Clicked!";
	};


	$scope.setImage = function(gridSize) {
		window.alert("Hellow!!!");
		$scope.gridSize = gridSize;
		$scope.cellSize = 400/gridSize;
		for (var i = 0; i < 9; i++) {
		//if ($scope.i<9){
			$scope.veggies1.push({ "number": '<button ng-click="alert(123)">' + $scope.veggies1.length + '</button>' });
			$scope.i = $scope.i + 1;
		//}
		}

		$scope.myStyle = {
			//"background-color": "red",
			"background-image": 'url(' + $scope.puzzleimg + ')'
			//"background-size": $scope.gridSize*100 + '%',
			//"width": string($scope.cellSize) + 'px',//'100px',
			//"height": string($scope.cellSize) + 'px'//'100px'
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

















