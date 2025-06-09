
const users = [
  { id: 1, name: "Jack" },
  { id: 2, name: "John" },
  { id: 3, name: "Mike" },
];
const userStatuses = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];
const getUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};
const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(userStatuses);
  });
};

const combineData = async (...fns) => {
  const [ users, statuses ] = await Promise.all([...fns]);
  const result = [];

  users.forEach(user => {
    const filteredStatus = statuses.find(status => status.id === user.id);
    result.push({ ...user, ...filteredStatus })
  });

  console.log('result', result)
}

combineData(getUsers(), getUserStatuses());
