var app = angular.module('ShittyApp', []);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: 'views/meow.html',
    controller: 'SplashCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);