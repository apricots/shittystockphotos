var app = angular.module('ShittyApp', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: 'views/meow.html',
    controller: 'DefaultCtrl'
  })
  .when('/collection/:collectionId', {
    templateUrl: 'views/collection.html',
    controller: 'CollectionCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);