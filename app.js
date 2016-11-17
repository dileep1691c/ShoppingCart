var app = angular.module("myApp", ["ui.router"]);
app.config(function ($stateProvider) {
    $stateProvider

        .state("home",{
            url:"/home",
            templateUrl:"js/views/carousel.html",
            controller:""

        })
        .state("categories",{
            url:"/categories",
            templateUrl:"js/views/categories.html",
            controller:"categoriesCtrl"

        })
        .state("products",{
            url:"/products/:name",
            templateUrl:"js/views/products.html",
            controller:"productsCtrl"

        })
        .state("login",{
            url:"/login",
            templateUrl:"js/views/login.html",
            controller:"loginController"

        })
        .state("myCart",{
            url:"/myCart",
            templateUrl:"js/views/cart.html"
        })
    // $routeProvider
    //     .when("/", {
    //         templateUrl: "js/views/carousel.html"
    //     })
    //     .when("/home", {
    //         templateUrl: "js/views/carousel.html"
    //         // controller:"categoriesCtrl"
    //     })
    //     .when("/categories", {
    //         templateUrl: "js/views/categories.html",
    //         controller: "categoriesCtrl"
    //     })
    //     .when("/products/:name", {
    //         templateUrl: "js/views/products.html",
    //         controller:"productsCtrl"
    //     })
    //     .when("/products/", {
    //         templateUrl: "js/views/products.html",
    //         controller:"productController"
    //     })
    //     .when("/productview", {
    //         templateUrl: "js/views/productview.html",
    //         controller: "productsCtrl"
    //     })
    //     .when("/mycart", {
    //         templateUrl: "js/views/cart.html",
    //         controller: "cartController"
    //     })
    //     .when("/login", {
    //         templateUrl: "js/views/login.html",
    //         controller: "loginController"
    //     });
});