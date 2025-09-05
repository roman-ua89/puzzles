
var plusOne = function(digits) {

  for (let i = digits.length - 1; i >= 0; i--) {

    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;

};

const digits1 = [1,2,3];
const res1 = plusOne(digits1);
console.log('res1', res1);

const digits2 = [4,3,2,1];
const res2 = plusOne(digits2);
console.log('res2', res2);

const digits3 = [9];
const res3 = plusOne(digits3);
console.log('res3', res3);

const digits4 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const res4 = plusOne(digits4);
console.log('res4', res4);