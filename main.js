console.log('hello2')
angular.module('myApp', ['ngRoute'])
    .controller('mycontroller', function ($scope){
        $scope.person = {name : 'youxiachai'}
        var updateClock = function () {
            $scope.clock = new Date();
        }

        var timer = setInterval(function () {
              $scope.$apply(updateClock())
        }, 1000);

        updateClock();
    })
    .controller('democontroller', function ($scope, $http){
        $scope.counter = 0;

        $scope.add = function (amount) {
            $scope.counter += amount;
        }


        $scope.roommates = [
            { name: 'Ari'},
            { name: 'Q'},
            { name: 'Sean'},
            { name: 'Anand'}
        ];

        $scope.substract = function (amount) {
            $scope.counter -= amount;
        }


        $scope.send = function () {
            $http({
                method: 'JSONP',
                url: 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON&callback=JSON_CALLBACK'
            }).success(function(data, status, headers, config) {
                    // data contains the response
                    // status is the HTTP status
                    // headers is the header getter function
                    // config is the object that was used to create the HTTP request
                    console.log('success')
                    console.log(data);
                    $scope.data = data;
                }).error(function(data, status, headers, config) {
                    console.log('err')
                    console.log(data);

                    $scope.data = data;
                });
        }
    }).directive('helloworld', function () {
        return {
            restrict: 'AE',
            replace: true,
            template: '<h3>Hello World222222222!</h3>'
        }
    });
