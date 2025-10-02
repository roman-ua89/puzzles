/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  let isPoserOfTwo = false;
  let result = 0;
  let pow = 0;

  while(result < n) {
    result = Math.pow(2, pow);
    pow += 1;
    if (n === result) {
      isPoserOfTwo = true;
    }
  }

  return isPoserOfTwo;
};

const n1 = 1;
console.log('res1: ', isPowerOfTwo(n1));


const n2 = 16;
console.log('res2: ', isPowerOfTwo(n2));


const n3 = 3;
console.log('res3: ', isPowerOfTwo(n3));
