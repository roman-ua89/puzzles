var romanToInt = function(s) {
  const enumMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);

  const arr = s.split('');
  let index = arr.length - 1;
  let sum = 0;

  if (arr.length === 1) {
    return enumMap.get(arr[0]);
  }

  while(index >= 0) {
    if (index - 1 >=0 && enumMap.get(arr[index]) > enumMap.get(arr[index - 1])) {
      sum += enumMap.get(arr[index]) - enumMap.get(arr[index - 1]);
      index--;
    } else if (index - 1 >= 0 && enumMap.get(arr[index]) < enumMap.get(arr[index - 1])) {
      sum += enumMap.get(arr[index]);
    } else if (index - 1 >= 0 && enumMap.get(arr[index]) === enumMap.get(arr[index - 1])) {
      sum += enumMap.get(arr[index]);
    } else if (index - 1 < 0) {
      sum += enumMap.get(arr[index]);
    }
    index--;
  }
  return sum;

};

const sum = romanToInt('MCMXCIV');
console.log('sum', sum)