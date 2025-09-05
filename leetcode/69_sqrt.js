
var mySqrt = function(x) {
  let multiplier = 1;

  while((multiplier * multiplier) < x) {
    multiplier += 1;
  }

  if ((multiplier * multiplier) > x) {
    return multiplier - 1;
  }

  return multiplier;
};

const res1 = mySqrt(4);
console.log('res1', res1); // 2

const res2 = mySqrt(8);
console.log('res2', res2); // 2