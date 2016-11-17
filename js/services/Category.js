var app = angular.module("myApp");
app.service("categoriesService", function ($http, $q) {
    var categories = "";

    this.getCategories = function () {
        var deffered = $q.defer();
        if (categories == "") {
            $http.get('http://localhost/api/category.php')
                .then(function (response) {
                    categories = response.data.product_categories;
                    deffered.resolve(categories);
                }).catch(function (response) {
                deffered.reject(response);
            });

        }
        else {
            deffered.resolve(categories);
        }
        return deffered.promise;
    };

});