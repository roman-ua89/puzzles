var getValue = function (a, b) {
    if (a === b) {
        console.log('values are strings');
    }
    else {
        console.log('a - is a number');
    }
};
getValue('a', 'a');
getValue(1, 'c');
