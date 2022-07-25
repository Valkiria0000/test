export const searchFilter = (users, value) => {
  return users.filter((userItem) => {
    console.log(userItem.name);
    return userItem.name.includes(value);
  });
};
