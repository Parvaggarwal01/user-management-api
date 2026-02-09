import post from "../models/post.js";
import { user as User } from "../models/user.model.js";

export const getUsersService = async () => {
  return User.find();
};

export const getUserByIdService = async (id) => {
  return User.findById(id);
};

export const getUserByActiveService = async () => {
  return User.find({ isActive: true });
};

export const createUser = async (name, email, password, role, isActive) => {
  const newUser = new User({
    name,
    email,
    password,
    role,
    isActive,
  });

  return newUser.save();
};

export const deleteUserService = async (id) => {
  const deletedUser = await User.findByIdAndDelete(id);
  return deletedUser !== null;
};

export const updateUserService = async (
  id,
  name,
  email,
  password,
  role,
  isActive,
) => {
  const updatePayload = {};
  if (name) updatePayload.name = name;
  if (email) updatePayload.email = email;
  if (password) updatePayload.password = password;
  if (role) updatePayload.role = role;
  if (isActive !== undefined) updatePayload.isActive = isActive;

  return User.findByIdAndUpdate(id, updatePayload, {
    new: true,
    runValidators: true,
  });
};

export const updateDetailsByEmailService = async (email, password) => {
  const updatePayload = {};
  if (password) updatePayload.password = password;

  return User.findOneAndUpdate({ email: email }, updatePayload, {
    new: true,
    runValidators: true,
  });
};

export const deleteByEmailService = async (email) => {
  const deletedUser = await User.findOneAndDelete({ email: email });
  return deletedUser !== null;
};

export const createPostService = async (title, content, userId) => {
  const newPost = new post({
    title,
    content,
    user: userId,
  });

  const savedPost = await newPost.save();
  await savedPost.populate("user", "name email role isActive");
  return savedPost;
};

export const getPostService = async () => {
  return post.find().populate("user", "name email role isActive");
};
