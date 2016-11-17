var app = angular.module("myApp");
app.controller("cartController",function ($scope,Cart) {
    $scope.item = Cart.getCount();
    $scope.items = Cart.getItems();

})