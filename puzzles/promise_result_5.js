console.log("begins");

setTimeout(() => { // t1
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () { // t2
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});

// begins,  promise 2, setTimeout 1, promise 1, setTimeout 2, dot then 1, resolve 1
// tasks q: t1, t2