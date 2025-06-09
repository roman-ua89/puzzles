
/*
* Необходимо написать функцию, которая принимает два аргумента - асинхронную функцию и временной лимит в миллисекундах.
* Функция должна возвращать новую версию асинхронной функции, выполнение которой ограничено временным лимитом.
Должны выполняться следующие условия:
- Если время выполнение исходной функции меньше временного лимита, то новая функция должна вернуть результат выполнения асинхронной функции.
- Если время выполнение исходной функции больше временного лимита, то новая функция вернуть сообщение
"Превышен лимит времени исполнения"
*/

const fn = async (n) => {
  await new Promise(res => setTimeout(res, 100));

  return n * n;
}

const asyncLimit = (fn, timer) => {

  return async (...args) => {
    return Promise.race([fn(...args), new Promise((resolve, reject) => setTimeout(() => reject('time limit exceeded'), timer))]);
  }
}

// asyncLimit(fn, 50)(5).then(res => console.log('res', res)).catch(err => console.log('rejected')); // rejected
// asyncLimit(fn, 150)(5).then(res => console.log('res', res)).catch(err => console.log('rejected')); // resolved 25

const fn2 = async (a ,b) => {
  await new Promise(res => setTimeout(res, 120));

  return a + b;
}

// asyncLimit(fn2, 100)(1, 2).then(res => console.log('res', res)).catch(err => console.log('rejected')); // rejected
// asyncLimit(fn2, 150)(1, 2).then(res => console.log('res', res)).catch(err => console.log('rejected')); // resolved 3
