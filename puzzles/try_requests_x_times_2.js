
const mockedFetch = (url) => {
  console.log('Make request to: ', url);
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      console.log('R successful')
      return resolve({ name: 'Roman' });
    }
    console.log('R NOT successful')
    // throw new Error('data wat not taken');
    return reject();
  })
}

const requestManager = async (url, attempts, delay) => {

  try {
    return await mockedFetch(url);
  } catch (e) {
    if (attempts) {
      return requestManager(url, attempts - 1, delay)
        .then(data => {
          return data;
        })
    }
  }
}

await requestManager('some url', 6, 1).then((data) => {
  console.log('retrieved data', data)
}).catch((err) => {
  console.log('err: ', err);
})