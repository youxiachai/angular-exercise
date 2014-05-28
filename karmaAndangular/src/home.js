'use strict';

var app = angular.module('Application', ['ngResource']);

app.factory('UserFactory',['$resource', function($resource){
    return $resource('Users/users.json', {},{ getlist: {method: 'get', url : 'Users/users.json', isArray : true}})
}]);

app.controller('MainCtrl',['$scope', 'UserFactory', function($scope, UserFactory) {
    $scope.text = 'Hello World!';
    $scope.users = UserFactory.getlist();
}]);



// The controller code
function MyController($scope, $http) {
    var authToken;

    $http.get('/auth.py').success(function(data, status, headers) {
        authToken = headers('A-Token');
        $scope.user = data;
    });

    $scope.saveMessage = function(message) {
        var headers = { 'Authorization': authToken };
        $scope.status = 'Saving...';

        $http.post('/add-msg.py', message, { headers: headers } ).success(function(response) {
            $scope.status = '';
        }).error(function() {
                $scope.status = 'ERROR!';
            });
    };
}

app.controller('MyController',  MyController);