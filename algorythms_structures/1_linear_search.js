
const array = [1,4,5,6,2,3,7,9,8];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
        return i;
    }
  }
  return null;
}

console.log('res', linearSearch(array, 8));
console.log('count = ', count); // 9
// complexity On, where n - amount of items in array