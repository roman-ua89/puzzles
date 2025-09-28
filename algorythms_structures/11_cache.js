// кешування даних для запобігання повторних обрахунків ф-ї

function cashFunction (fn) {
  const cache = {};

  return function (n) {
    if (cache[n]) {
      console.log('taken from cache: ', cache[n]);
      return cache[n];
    }
    let result = fn(n);
    console.log('calculated = ', result);
    cache[n] = result;
    return result;
  }
}


function factorial(n) {
  let result = 1;

  while(n !== 1) {
    result *= n;
    n -= 1;
  }

  return result
}

console.log('f: ', factorial(5));


const cachedFn = cashFunction(factorial);
console.log('res 1: ', cachedFn(3))
console.log('res 2: ', cachedFn(4))
console.log('res 3: ', cachedFn(3))



