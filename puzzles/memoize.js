
const getResult = (id) => {
  return new Promise((resolve) => {
    console.log('Fetching results for ', id);
    setTimeout(() => resolve(`Result - ${id}`), 500);
  });
}

const memoize = (fn) => {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log('got from cache');
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  }
}

const memoizedGetResult = memoize(getResult);

memoizedGetResult(1).then((r) => console.log(1, r))
memoizedGetResult(1).then((r) => console.log(1, r))
memoizedGetResult(2).then((r) => console.log(2, r))
memoizedGetResult(2).then((r) => console.log(2, r))