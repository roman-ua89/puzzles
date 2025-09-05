/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  const reverseNum = Number([...(x.toString())].reverse().join(''));
  return reverseNum === x;
};

var isPalindrome2 = function(x) {
  // Negative numbers are not palindromes
  if (x < 0) {
    return false;
  }

  // Numbers ending with 0 that are not 0 itself cannot be a palindrome
  if (x !== 0 && x % 10 === 0) {
    return false;
  }

  let reversed = 0;
  let original = x;

  // Reconstruct the number from the last digit
  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  // Compare the reversed number with the original
  return original === reversed;
};

console.log('is 2: ', isPalindrome2(-121))
console.log('is 2: ', isPalindrome2(121))
console.log('is 2: ', isPalindrome2(33))
console.log('is 2: ', isPalindrome2(234))
