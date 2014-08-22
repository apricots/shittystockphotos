var app = angular.module('ShittyApp', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/meow', {
    templateUrl: 'views/meow.html',
    controller: 'DefaultCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);