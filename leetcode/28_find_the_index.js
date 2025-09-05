
const haystack = "sadbutsad";
const needle = "sad";

var strStr = function(haystack, needle) {

  if (!haystack || !needle) return -1

  if (haystack.length < needle.length) return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, needle.length + i) === needle) {
      return i;
    }
  }
  return - 1;

};

const res = strStr(haystack, needle);
console.log('res', res);


const res2 = strStr("leetcode", "leeto");
console.log('res2', res2);


const res3 = strStr("hello", "ll");
console.log('res3', res3);