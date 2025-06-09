function curry(fn) {

  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else {
      return function (...args2) {
        return curried.apply(null, args.concat(args2))
      }
    }
  }
}

const curriedSum = curry((a, b, c) => a + b + c);
const partiallyCurriedSum = curriedSum(1);
const partiallyCurriedSum2 = partiallyCurriedSum(2);
console.log(partiallyCurriedSum2(3)); // 6
// const partiallyCurriedSum = curriedSum(1);
// console.log(partiallyCurriedSum(2, 3)); // 6
