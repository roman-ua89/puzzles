const debounce = (fn, delay) => {
  let timerId = null;

  return (value) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(value), delay);
  }
}

const saveValue = (value) => {
  console.log('saved value', value);
}

const debouncedFn = debounce(saveValue, 1000);

const onChangeHandler = (e) => {
  debouncedFn(e.target.value);
}

const $input = document.getElementById('text-input');
$input.addEventListener('input', onChangeHandler);
