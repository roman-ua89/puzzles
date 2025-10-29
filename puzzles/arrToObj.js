

const input = [
  {
    id: 1,
    name: 'Bob'
  },
  {
    id: 7,
    name: 'Carl'
  }
];

const normalize = (arr) => {
  return arr.reduce((acc, cur) => {
    return { entities: { ...acc.entities, [cur.id]: { id: cur.id, name: cur.name } }, byId: [...acc.byId, cur.id] }
  }, { entities: {}, byId: [] })
}

const output = normalize(input);
console.log('.output', output)

/* {
  entities: {
    1: {
      id: 1,
      name: 'Bob'
    },
    7: {
      id: 7,
      name: 'Carl'
    }
  },
  byId: [1, 7],
} */