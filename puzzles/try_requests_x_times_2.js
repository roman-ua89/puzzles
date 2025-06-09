
const requestManager = async (url, attempts, delay = 1) => {
  attempts -= 1;

  try {
    return await fetch(url);
  } catch (e) {
    if (attempts) {
      setTimeout(() => {
        requestManager(url, attempts, delay += 1);
      }, 1000 * delay);
    } else {
      throw new Error('no attempts');
    }
  }
}

requestManager("http://adfsfsf.com", 3)
  .then((response) => { console.log(response); })
