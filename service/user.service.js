import { users } from "../data/users.js";

export const createUser = (name, email) => {
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
  };

  users.push(newUser);
  return newUser;
};

export const deleteUserService = (id) => {
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return false;
  }
  users.splice(index, 1);
  return true;
};

export const updateUserService = (id, name, email) => {
  const index = users.findIndex((u) => u.id === id);

  if (name) users[index].name = name;
  if (email) users[index].email = email;

  return users;
};
