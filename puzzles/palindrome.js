
const pal = (word) => {
  let palindromeWord = word.split('').reduceRight((acc, val) => {
    return acc.concat(val)
  })
  return word === palindromeWord;

  // v2
  // const formattedStr = word.toLowerCase().replaceAll(' ', '');
  // return formattedStr === formattedStr.split('').reverse().join('');
}

console.log(pal('racecar'));
console.log(pal('table'));
