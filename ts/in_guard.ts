
class Banana {
    isTasty(): boolean {
        return true;
    }
}

class Apple {
    isJuicy(): boolean {
        return true;
    }
}

type Fruit = Banana | Apple;

function buyFruit(fruit: Fruit): number {
    let price = 0;

    if ('isTasty' in fruit) {
        price = fruit.isTasty() ? 5 : 10;
    }

    if ('isJuicy' in fruit) {
        price = fruit.isJuicy() ? 5 : 10;
    }

    return price;
}

const apple = new Apple();
console.log(buyFruit(apple)); // 0

const banana = new Banana();
console.log(buyFruit(banana));
