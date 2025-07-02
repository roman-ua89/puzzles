
const plus = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;

const pipe = (array) => {

  return (arg) => {
    return array.reduce((acc, cur, i) => {
      if (i === 0) {
        acc += cur(arg);
      } else {
        acc = cur(acc);
      }
      return acc;
    }, 0)
  }
}

const firstCalculation = pipe([plus(2), multiply(3)]);
console.log(firstCalculation(2)); // 12

const secondCalculation = pipe([multiply(2), plus(4), multiply(2)]);
console.log(secondCalculation(5)); // 28