app.controller('DefaultCtrl', function ($scope, Collection) {

  $scope.collections = Collection.getAllCollections();

});