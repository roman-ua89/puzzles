const range = (start, end) => {
  const amountOfSteps = end - start;
  const result = [];
  new Array(amountOfSteps + 1).fill('').map((_, index) => {
    result.push(start + (index));
  })
  return result;
}

console.log(range(5, 10)); // [1,2,3,4,5...,50]
