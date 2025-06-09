function deepCompare(objA, objB) {
  if (Object.is(objA, objB)) {
    return true; // Handles identical objects, null, undefined, primitives
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false; // If either is not an object (and not null), and they weren't identical, they're not deeply equal
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false; // Different number of keys, not equal
  }

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];

    if (!objB.hasOwnProperty(key)) {
      return false; // Key doesn't exist in B
    }

    if (!deepCompare(objA[key], objB[key])) { // Recursive call
      return false; // Values are not deeply equal
    }
  }

  return true; // All keys and values are deeply equal
}

// Example Usage:
const obj1 = { a: 1, b: { c: 2, d: { e: 3 } } };
const obj2 = { a: 1, b: { c: 2, d: { e: 3 } } };
const obj3 = { a: 1, b: { c: 2, d: { e: 4 } } };
const obj4 = { a: 1, b: { c: 2 } };


console.log("obj1 vs obj2:", deepCompare(obj1, obj2)); // Output: true
console.log("obj1 vs obj3:", deepCompare(obj1, obj3)); // Output: false
console.log("obj1 vs obj4:", deepCompare(obj1, obj4)); // Output: false
console.log("null vs undefined:", deepCompare(null, undefined)); // Output: false
console.log("NaN vs NaN:", deepCompare(NaN, NaN)); // Output: true
console.log("1 vs '1':", deepCompare(1, '1')); // Output: false (strict comparison)
