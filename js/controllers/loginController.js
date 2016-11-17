var app = angular.module("myApp")
app.controller("loginController", function ($scope, Login, $location) {
    $scope.customer = {
        username: "",
        password: ""
    };
    $scope.login = function () {
        Login.isLogedIn()
            .then(function (response) {
                angular.forEach(response, function (user) {
                    if ($scope.customer.username === user.username && $scope.customer.password == user.password) {
                        $location.path("/mycart");
                    }
                    else{
                        $location.path("/login");
                    }
                })

            })
            .catch(function (response) {

            })

    }

})