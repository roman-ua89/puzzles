
// 3
const { foo: [bar], bar: foo } = { foo: [1], bar: [2] }
console.log('3)', { foo, bar }); // { foo: [2], bar: 1 }

// 4
const { foo: [bar], bar: foo } = { foo: [1], bar: [{ baz: 3 }] }
console.log('4)', { foo, bar }) // { bar: 1, foo: [{ baz: 3 }] }

// 5
const { foo: [bar], bar: [{ baz: foo }] } = { foo: [1], bar: [{ baz: 3 }] }
console.log('5)', { foo, bar }); //////////////////////////////////////////////////// { foo: 3, bar: 1 }

// 6
const value = {
  foo: [{ baz: 1 }],
  baz: 2
}

const { foo: [{ baz: foo }], bar: { baz: bar } = { baz : 3 }} = value;
console.log('6)', { foo, bar }) //


//--------------

let obj = { a: 1 };
let array = [obj];

obj = { ...obj, b:5 };
console.log('obj', obj); // { a: 1, b: 5 }
console.log('array', array); // [{ a: 1 }]
//----------------
