

function strJoin(delimiter, ...otherParams) {
  return otherParams.join(delimiter);
}

console.log(strJoin('.', 'a', 'b', 'c'))
console.log(strJoin('-', 'a', 'b', 'c', 'd'))
