function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
}
var sum = add(5, 5);
console.log('sum', sum);
//--------------------------------------
var double = function (param) {
    if (typeof param === 'string') {
        return param.repeat(2);
    }
    else if (typeof param === 'number') {
        return param * 2;
    }
};
console.log('double', double(5));
console.log('double', double('5'));
