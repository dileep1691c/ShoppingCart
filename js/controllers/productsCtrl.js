var app = angular.module("myApp");
app.controller("productsCtrl", function ($scope, Products, $stateParams) {
    Products.getProducts($stateParams.name)
        .then(function (response) {
            var products = [];
            var prd = response;
            for (var i = 0; i < prd.length; i++) {
                var name = prd[i].categories[0];
                if ($stateParams.name == name) {
                    products.push(prd[i]);
                }
            }
            $scope.productlist = products;
        })
        .catch(function (response) {

        });
});