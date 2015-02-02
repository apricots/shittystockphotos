app.controller('CollectionCtrl', function ($scope, Collection) {

  $scope.collection = Collection.getCollection(0);

});