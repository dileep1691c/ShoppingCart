var app = angular.module("myApp");
app.service("Cart", function ($http) {
    var cart = [];

    this.addItem = function (product) {
        cart.push(product);
    };

    this.getCount = function () {
        return cart.length;
    }
    this.getItems = function () {
        return cart;
    }

    this.removeItem = function (product) {
        var index = cart.indexOf(product);
        cart.splice(index, 1);
    };

    this.updateQuantity = function (product) {

    };

    this.isAdded = function (product) {

    };
})