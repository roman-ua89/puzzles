
const anagram = (word1, word2) => {
  const sortedWord1 = word1.toLowerCase().replaceAll(' ' , '').split('').sort().join();
  const sortedWord2 = word2.toLowerCase().replaceAll(' ' , '').split('').sort().join();

  return sortedWord1 === sortedWord2;

  // v2
  // const lettersArr = word1.split('');
  // let filteredLetters = [];
  // lettersArr.forEach(letter => {
  //   if (word2.toLowerCase().includes(letter.toLowerCase())) filteredLetters.push(letter);
  // });
  // return lettersArr.length === filteredLetters.length;
}

console.log(anagram('fi n de r', 'Fri en d')) // true
console.log(anagram('hello', 'bye')) // false
