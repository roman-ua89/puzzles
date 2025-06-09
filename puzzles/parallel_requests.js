const asyncParallel = (arr, fn) => {
  Promise.all(arr).then((values) => fn(values.join(', ')));
}

const asyncFn1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  })
};
const asyncFn2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  })
};
const asyncFn3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  })
};

asyncParallel([asyncFn1(), asyncFn2(), asyncFn3()], (result) => {
  console.log(result); // 1, 2, 3
});
