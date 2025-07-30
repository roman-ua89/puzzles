type alphanumeric = string | number;

function add (a: alphanumeric, b: alphanumeric) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
}

const sum = add(5, 5);
console.log('sum', sum);


//--------------------------------------

const double = (param: unknown) => {
    if (typeof param === 'string' ) {
        return param.repeat(2);
    } else if (typeof param === 'number') {
        return param * 2;
    }
}

console.log('double', double(5));
console.log('double', double('5'));