
/*
* написати декоратор для ф-ї, який обмежує число викликів
*
* calLimit(fn, limit, callback)
* fn - ф-я, яку декоруємо;
* limit - максимальне число викликів;
* callback - опціонально. Викликається після останнього виклику
* У ф-ї, що викликається, повинен бути метод Reset(), щоб скинути лічильник в 0
* */
function callLimit(fn, limit, callback) {
  let counter = 0;

  const func = function(...args) {
    if (counter === limit) return;
    counter++;

    if (limit === counter) {
      if (callback) setTimeout(() => callback(), 0);
      return fn(...args)
    }
    return fn(...args);
  }

  func.reset = () => {
    counter = 0;
  }
  return func;
}

function log(title, message) {
  console.log(title + ': ' + message);
}

const logLimited = callLimit(log, 3);

logLimited('title1', 'msg');
logLimited('title2', 'msg');
logLimited('title3', 'msg');
logLimited('title4', 'msg'); // none
logLimited.reset(); // reset counter
logLimited('title1', 'msg');
logLimited('title2', 'msg');
logLimited('title3', 'msg');
logLimited('title4', 'msg'); // none
