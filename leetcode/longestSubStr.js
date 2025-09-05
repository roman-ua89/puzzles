
var lengthOfLongestSubstring = function(s) {
  const eachIterationResult = new Map();
  let uniqueSequence = '';
  let longest = '';

  

  const values = eachIterationResult.values();
  console.log('eachIterationResult', eachIterationResult)
  values.forEach(item => {
    if (item.length > longest.length) longest = item;
  })

  return longest.length;
};

lengthOfLongestSubstring('aaacb')

