
const palindrome = (str) => {
  const startSym = 0;
  const endSym = str.length - 1;

  if (str.length > 1 && str[startSym] === str[endSym]) {
    const newStr = str.slice(startSym + 1, endSym);
    palindrome(newStr)
  } else {
    return false;
  }
  return true;
}

const res1 = palindrome('racecar'); // true
console.log('res1', res1);

const res2 = palindrome('mom'); // true
console.log('res2', res2);

const res3 = palindrome('roman'); // false
console.log('res3', res3);