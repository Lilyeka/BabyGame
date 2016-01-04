var myApp=angular.module('myApp');
myApp.controller('questionsController', function($scope) {
 $scope.i = 0; 
  $scope.questions = [{
        id: 1,
        text: 'На какой картинке веселый зайчик?',
        img1: {
            url: 'img/img11.jpg',
            answer: 1
        },
        img2: {
            url: 'img/img12.jpg',
            answer: 0
        }
    },
    {
        id: 2,
        text: 'На какой картинке грустный зайчик?',
        img1: {
            url: 'img/img11.jpg',
            answer: 0
        },
        img2: {
            url: 'img/img12.jpg',
            answer: 1
        }
    }

    ]
});

