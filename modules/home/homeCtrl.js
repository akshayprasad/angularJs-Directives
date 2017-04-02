(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$scope','$element'];

    function homeCtrl($scope,$element) {

        $scope.message = "Directive Worked!";

        $scope.likeFunction = function (star) {
            alert("I like the book!, and gave " + star + " star.")
        }


        var mouseClicked = this;

        mouseClicked.bookType = null;

        mouseClicked.setBookType = function (type) {
            mouseClicked.bookType = type
        };

        $element.bind("click", function () {
            alert("Typeof book: " + mouseClicked.bookType + " sent for statistical analysis!");
        })


    }



    angular.module('myApp')
        .directive('simple', function () {
            return {
                restrict: 'E',
                scope: {
                    data: '='
                },
                templateUrl: 'templates/someHtml.html'
            }
        });

    angular.module('myApp').directive("restricted", function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                // Some auth check function
                element.css('list-style-type', 'none');
                var isAuthorized = false;
                if (!isAuthorized) {
                    element.css('background', 'grey');
                    element.css('color', 'white');

                }
            }
        }
    });


    angular.module('myApp').directive("restricted", function () {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                // Some auth check function
                var isAuthorized = false;
                if (!isAuthorized) {
                    element.css('background', 'green');
                    element.css('color', 'white');

                }
            }
        }
    });


    angular.module('myApp').directive("user", function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                scope.username = attrs.username;
                scope.avatar = attrs.avatar;
                scope.reputation = attrs.reputation;
            },
            template: '<div>Username: {{username}}, Avatar: {{avatar}}, Reputation: {{reputation}}</div>'
        }
    });

    angular.module('myApp').directive("comment", function () {
        return {
            restrict: 'M',
            template: '<textarea class="comment"></textarea>'
        }
    });

    angular.module('myApp').directive("item", function () {
        return {
            restrict: 'E',
            scope: {},
            link: function (scope, element, attrs) {
                scope.name = attrs.name;
            },
            template: '<div><strong>Name:</strong> {{name}} <strong>Select Amount:</strong> <select name="count" ng-model="count"><option value="1">1</option><option value="2">2</option></select> <strong>Selected Amount:</strong> {{count}}</div>'
        }
    });

    angular.module('myApp').directive("notification", function () {
        return {
            restrict: 'E',
            scope: {
                message: '@'
            },
            template: '<h4><div class="alert">{{message}}</div></h4>'
        }
    });

    angular.module('myApp').directive("bookComment", function () {
        return {
            restrict: 'E',
            scope: {
                text: '='
            },
            template: '<input type="text" ng-model="text"/>'
        }
    });

    angular.module('myApp').directive("likeBook", function () {
        return {
            restrict: 'E',
            scope: {
                like: '&'
            },
            template: '<input type="text" ng-model="starCount" placeholder="Enter rate count here"/><br/>' +
                '<input type="button" ng-click="like({star: starCount})" value="Like"/>'
        }
    });

    angular.module('myApp').directive('mouseClicked', function() {
	    return {
	        restrict: 'E',
	        scope: {},
	        controller: "homeCtrl as mouseClicked"
	    }
	});


    angular.module('myApp').directive('ebook', function () {
        return {
            require: "mouseClicked",
            link: function (scope, element, attrs, homeCtrl) {
                homeCtrl.setBookType("EBOOK");
            }
        }
    });

    angular.module('myApp').directive('magazine', function () {
        return {
            require: "mouseClicked",
            link: function (scope, element, attrs, homeCtrl) {
                homeCtrl.setBookType("MAGAZINE");
            }
        }
    });

})();