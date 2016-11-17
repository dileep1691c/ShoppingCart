var app = angular.module("myApp")
app.controller("categoriesCtrl", function ($scope, categoriesService) {



    categoriesService.getCategories()
        .then(function (response) {
            $scope.xyz = response;
            // console.log($scope.categories)
        })

        .catch(function (response) {
            $scope.error = ""
        })


})