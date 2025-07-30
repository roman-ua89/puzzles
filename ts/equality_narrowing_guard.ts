
const getValue = (a: number | string, b: string) => {
    if (a === b) {
        console.log('values are strings', a); // a - is a string
    } else {
        console.log('a - is a number', a); // a - string | number
    }
}

getValue('a', 'a');
getValue(1, 'c');