
var largestGoodInteger = function(num) {
  const arr = [...num];
  let biggestNum = '';

  arr.forEach(item => {
    const threeSymbols = item.repeat(3);
    if (num.includes(threeSymbols)) {

      if (!biggestNum) {
        biggestNum = threeSymbols;
      } else {
        if (Number(biggestNum) < Number(threeSymbols)) {
          biggestNum = threeSymbols;
        }
      }
    }
  })


  return biggestNum;
};

const str = '6777133339'
console.log(largestGoodInteger(str))