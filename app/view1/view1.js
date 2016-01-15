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

.controller('View1Ctrl', function($scope, $http, $location,$timeout) {
$scope.s = $location.search();
var nameFile ='';
if ($scope.s.v ="ver1")
{alert('Привет букет!');}
	
	// a simple filter object, with default filter values
        /*$scope.filters = { v: '', title: '' };
 
        // read filters from the query string, and use them to
        // replace the default filters
        
        for (var fld in $scope.filters) {
            if (fld in $scope.s) {
                $scope.filters[fld] = $scope.s[fld];
            }
        }*/	
 $http.get('imgs.json').success(function(data){
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

});

/*.animation('highlight-enter',function(){
return{
	setup: function(element){
		element.css({
			opacity: 0.1
		});
	},
	start: function(element,done){
		element.animate({
			opacity: 1
		},1000, function(){
			done();
		})
	}

}

});
 .animation('highlight-enter', function(){
return{
	enter: function(element, done){
		element.css({
			opacity:0.5,
			position:"relative",
			top:"10px",
			left:"20px"
			
		})
    		.animate({
    			top:0,
			left:0,
			opacity: 1},
		1000,done);
		
	}
  };
});
*/
