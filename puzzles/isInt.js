

const isInt = (number) => {
  return  Math.round(number) === number;
}

console.log(isInt(4));
console.log(isInt(4.2)); // false
console.log(isInt(-3));
