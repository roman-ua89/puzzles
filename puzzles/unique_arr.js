const uniqueArr = (arr) => {
  const setOfItems = new Set(arr);
  return Array.from(setOfItems);
}

console.log(uniqueArr([1, 1, 2])); // [1,2]
