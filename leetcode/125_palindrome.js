
var isPalindrome_v1 = function(s) {
  const origStr = s.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversedStr = s.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('').reverse().join('');
  console.log('origStr', origStr)
  console.log('reversedStr', reversedStr)
  return origStr === reversedStr;
};

const isPalindrome = (s) => {
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  const alphabeticalPattern = /[a-zA-Z0-9]/;

  while (leftIndex < rightIndex) {
    if (!alphabeticalPattern.test(s[leftIndex])) {
      leftIndex++;
    } else if (!alphabeticalPattern.test(s[rightIndex])) {
      rightIndex--;
    } else if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) {
      return false;
    } else {
      leftIndex++;
      rightIndex--;
    }
  }

  return true;
}

const s1 = "A man, a plan, a canal: Panama";
console.log('s1: ', isPalindrome(s1)); // true

const s2 = "race a car";
console.log('s2: ', isPalindrome(s2)); // false


const s3 = "0P";
console.log('s3: ', isPalindrome(s3)); // false