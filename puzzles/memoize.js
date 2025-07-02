
const getResult = (id) => {
  new Promise((resolve) => {
    console.log('Fetching results for ', id);
    setTimeout(() => resolve(`Result - ${id}`), 500);
  });
}

const memoize = (fn) => {
  const cache = new Map();

  return async(...args) => {
    const stringArgs = JSON.stringify(args);

    if (cache.has(stringArgs)) {
      console.log('from cache');
      return cache.get(stringArgs);
    }

    const res = fn(...args);
    cache.set(stringArgs, res);
    return res;
  }
}

const memoizedGetResult = memoize(getResult);

memoizedGetResult(1).then((r) => console.log(1, r))
memoizedGetResult(1).then((r) => console.log(1, r))
memoizedGetResult(2).then((r) => console.log(2, r))
memoizedGetResult(2).then((r) => console.log(2, r))