const throttle = (fn, delay) => {
  let timerId = null;

  return (value) => {
    if (!timerId) {
      fn(value);
      timerId = setTimeout(() => {
        timerId = null;
      }, delay)
    }
  }
}

const useThisValue = (value) => {
  console.log('use this value:', value);
}

const throttledFn = throttle(useThisValue, 500);

const onInputHandler = (e) => {
  throttledFn(e.target.value);
}

window.addEventListener('scroll', onInputHandler)
