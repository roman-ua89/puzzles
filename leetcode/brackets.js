
var isValid = function(s) {

  if (s.length % 2 !== 0) return false;
  let strCopy = s;

  const symMap = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])
  let iterationNum = 0;
  let symIndex = 0;

  while (strCopy.length) {
    const nextSym = symMap.get(strCopy[symIndex]);

    if (!nextSym) return false;

    if (strCopy[symIndex + 1] === nextSym) {
      const toReplace = `${strCopy[symIndex]}${nextSym}`;
      strCopy = strCopy.replace(toReplace, '');
      symIndex = 0;
    } else {
      symIndex++;
    }
    iterationNum++;
  }

  return !strCopy;
}

const check1 = isValid('()[]');
console.log('check1', check1);


const check2 = isValid('(]');
console.log('check2', check2);


const check3 = isValid('([])');
console.log('check3', check3);


const check4 = isValid('[({(())}[()])]');
console.log('check4', check4);


var isValidFaster = function(s) {
  if (s.length % 2 !== 0) return false;

  const symMap = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);

  const stack = [];

  for (let char of s) {
    if (symMap.has(char)) {
      stack.push(symMap.get(char));
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};