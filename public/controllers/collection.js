app.controller('CollectionCtrl', function ($scope, $routeParams, Collection) {

  $scope.collection = Collection.getCollection($routeParams.collectionId);

});