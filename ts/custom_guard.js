var Banana = /** @class */ (function () {
    function Banana() {
    }
    Banana.prototype.isTasty = function () {
        return true;
    };
    return Banana;
}());
var Apple = /** @class */ (function () {
    function Apple() {
    }
    Apple.prototype.isJuicy = function () {
        return true;
    };
    return Apple;
}());
var isBanana = function (fruit) {
    // return fruit instanceof Banana;
    return 'isTasty' in fruit;
};
var buyFruit = function (fruit) {
    var price = 0;
    if (isBanana(fruit)) {
        price = fruit.isTasty() ? 5 : 10;
    }
    else {
        price = fruit.isJuicy() ? 2 : 4;
    }
    return price;
};
var apple = new Apple();
console.log('buy apple: ', buyFruit(apple));
var banana = new Banana();
console.log('buy banana: ', buyFruit(banana));
