function shallowCompare(objA, objB) {
  if (Object.is(objA, objB)) {
    return true; // Handles identical objects, null, undefined, etc.
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false; // If either is not an object (and not null), they're not shallowly equal
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false; // Different number of keys, not equal
  }

  // Check if every key in A is also in B and has the same value
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (!objB.hasOwnProperty(key) || !Object.is(objA[key], objB[key])) {
      return false; // Key doesn't exist in B or values are different
    }
  }

  return true; // All keys and values are shallowly equal
}

const obj1 = { a: 1, b: 'hello', c: { x: 1 } };
const obj2 = { a: 1, b: 'hello', c: { x: 1 } }; // c is a *different* object
const obj3 = { a: 1, b: 'hello', c: { x: 1 } , d: 2};
const obj4 = { a: 1, b: 'hello', c: obj1.c }; // c is the *same* object

console.log("obj1 vs obj2:", shallowCompare(obj1, obj2));   // Output: false (c is a different object)
console.log("obj1 vs obj3:", shallowCompare(obj1, obj3));   // Output: false (different keys)
console.log("obj1 vs obj4:", shallowCompare(obj1, obj4));   // Output: true  (c is the same object)
console.log("obj1 vs obj1:", shallowCompare(obj1, obj1));   // Output: true  (same object)
console.log("null vs undefined:", shallowCompare(null, undefined)); // Output: false
console.log("NaN vs NaN:", shallowCompare(NaN, NaN));

