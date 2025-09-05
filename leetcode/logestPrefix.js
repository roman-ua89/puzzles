var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) return "";

  // find shortest string length to limit comparisons
  let minLen = Infinity;
  for (let s of strs) {
    if (s.length < minLen) minLen = s.length;
  }
  if (minLen === 0) return ""; // one string is empty

  // compare characters index by index
  for (let i = 0; i < minLen; i++) {
    const ch = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== ch) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0].slice(0, minLen);
};

const prefix = longestCommonPrefix(["flower","flow","flight"])
console.log('prefix', prefix)

const prefix2 = longestCommonPrefix(["a"])
console.log('prefix2', prefix2)

const prefix3 = longestCommonPrefix(["cir","car"])
console.log('prefix3', prefix3)

