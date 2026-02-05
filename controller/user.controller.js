import { users } from "../data/users.js";

export const getUser = (req, res) => {
  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
};

export const getUserById = (req, res) => {
  try {
    const { id } = req.body;
    const user = users.find((user) => user.id === id);
    console.log(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createUser = (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
    };

    users.push(newUser);

    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = (req, res) => {
  try {
    const { id } = req.body;
    const { name, email } = req.body;

    const userIndex = users.findIndex((user) => user.id === id);

    if (name) users[userIndex].name = name;
    if (email) users[userIndex].email = email;

    res.status(200).json({
      success: true,
      data: users[userIndex],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    users.splice(userIndex, 1);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
