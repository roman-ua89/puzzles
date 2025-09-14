
const fizzbuzz = (startNum, endNum) => {
  console.log(startNum);

  if (startNum % 5 === 0 && startNum % 3 === 0) {
    console.log(`${startNum} FizzBuzz`)
  } else if (startNum % 5 === 0) {
    console.log(`${startNum} Buzz`)
  } else if (startNum % 3 === 0) {
    console.log(`${startNum} Fizz`)
  }

  if (startNum < endNum) {
    fizzbuzz(startNum += 1, endNum);
  }
}


fizzbuzz(2, 20)