
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

const isBanana = (fruit: Fruit): fruit is Banana => { // 'is' - predicate
    // return fruit instanceof Banana;
    return 'isTasty' in fruit;
}

const buyFruit = (fruit: Fruit): number => {
    let price = 0;

    if (isBanana(fruit)) {
        price = fruit.isTasty() ? 5 : 10;
    } else {
        price = fruit.isJuicy() ? 2 : 4;
    }

    return price;
}

const apple = new Apple();
console.log('buy apple: ', buyFruit(apple));

const banana = new Banana();
console.log('buy banana: ', buyFruit(banana));