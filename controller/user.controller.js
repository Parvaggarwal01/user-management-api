import {
  getUsersService,
  getUserByIdService,
  getUserByActiveService,
  updateDetailsByEmailService,
  deleteByEmailService,
  createUser as createUserService,
  deleteUserService,
  updateUserService,
  createPostService,
  getPostService,
} from "../service/user.service.js";

export const getUser = async (req, res) => {
  try {
    const users = await getUsersService();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await getUserByIdService(id);
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

export const getUserByActive = async (req, res) => {
  try {
    const activeUsers = await getUserByActiveService();
    res.status(200).json({
      success: true,
      count: activeUsers.length,
      data: activeUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password, role, isActive } = req.body;
    const newUser = await createUserService(
      name,
      email,
      password,
      role,
      isActive,
    );

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

export const updateUser = async (req, res) => {
  try {
    const { id } = req.body;
    const { name, email, password, role, isActive } = req.body;

    const updateUser = await updateUserService(
      id,
      name,
      email,
      password,
      role,
      isActive,
    );

    if (!updateUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

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

export const updateDetailsByEmail = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const updateUser = await updateDetailsByEmailService(email, password);

    if (!updateUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

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

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const isDeleted = await deleteUserService(id);

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

export const deleteByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const isDeleted = await deleteByEmailService(email);

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

export const createPost = async (req, res) => {
  try {
    const { title, content, user } = req.body;

    if (!title || !content || !user) {
      return res.status(400).json({
        success: false,
        message: "Title, content and user ID are required",
      });
    }

    const newPost = await createPostService(title, content, user);

    res.status(201).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await getPostService();
    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
