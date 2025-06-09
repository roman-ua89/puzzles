
const auth = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      return resolve('resolved');
    } else {
      return reject('rejected');
    }
  });
}

async function tryAuth(n) {
  console.log('n', n)
  try {
    return await auth();
  } catch (err) {
    if (n === -1) throw new Error(err);
    setTimeout(async () => {
      n -= 1;
      return await tryAuth(n);
    }, 1000);
  }
}

tryAuth(2)
  .then(data => console.log('data', data))
  .catch(err => console.log('ERR:', err))
