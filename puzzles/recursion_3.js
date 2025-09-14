
const flatten = (arr) => {
  const result = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      const flattened = flatten(element);
      result.push(...flattened);
    } else {
      result.push(element);
    }

  }

  return result;

}

const res1 = flatten([1, 2, 3]);
console.log('res1', res1);

const res2 = flatten([1, 2, 3, [1, 2, 3]]);
console.log('res2', res2);

const res3 = flatten([1, [4, 5, 6, [7, 8, 9]], 2, 3]);
console.log('res3', res3);