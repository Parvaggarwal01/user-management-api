import { users } from "../data/users.js";
import {
  createUser as createUserService,
  deleteUserService,
  updateUserService,
} from "../service/user.service.js";

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
    const newUser = createUserService(name, email);

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

    const updateUser = updateUserService(id, name, email);

    res.status(200).json({
      success: true,
      data: updateUser,
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

    const isDeleted = deleteUserService(id);

    if (!isDeleted) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

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
