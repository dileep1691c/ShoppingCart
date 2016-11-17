var app = angular.module("myApp");
app.service("Products", function ($http, $q) {

    this.getProducts = function () {
        var products = "";
        var dfd = $q.defer();
        if (products == "") {
            $http({
                method: "get",
                url: 'http://localhost/api/products.php'
            })
                .then(function (response) {
                    products = response.data.products;
                    dfd.resolve(products);
                })
                .catch(function (response) {
                    dfd.reject("response")
                })

        }
        else {
            dfd.resolve(products);
        }

        return dfd.promise;
    };

});
