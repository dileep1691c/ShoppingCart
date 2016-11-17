 var app = angular.module("myApp");
 app.controller("cartCountController",function ($scope,Cart) {
     $scope.abc = Cart;
     $scope.$watch('abc.getCount',function (oldval,newval) {

         $scope.count = newval;
     })
 })