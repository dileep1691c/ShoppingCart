var app = angular.module("myApp");
app.service("Login", function ($http, $q) {
    this.isLogedIn = function () {
        var deffered = $q.defer();
        $http.post("data/users.json")
            .then(function (response) {
                deffered.resolve(response.data);

            })
            .catch(function (response) {
                deffered.reject(response)
            })
        return deffered.promise;
    }

})