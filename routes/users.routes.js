import express from "express";
import {
  getUser,
  getUserById,
  getUserByActive,
  createUser,
  updateUser,
  updateDetailsByEmail,
  deleteUser,
  deleteByEmail,
  createPost,
  getPosts,
} from "../controller/user.controller.js";

import {
  checkAuth,
  validateUserId,
  validateUser,
  validateUserById,
  tokenVerify,
} from "../middlewares/auth.js";

const router = express.Router();

router.get("/", tokenVerify, checkAuth, getUser);
router.get("/active", getUserByActive);
router.get("/id", validateUserById, getUserById);
router.get("/getPost", getPosts);
router.post("/", validateUser, createUser);
router.put("/update", validateUserId, updateUser);
router.put("/update-password", updateDetailsByEmail);
router.delete("/delete-email", deleteByEmail);
router.delete("/:id", validateUserId, deleteUser);
router.post("/post", createPost);

export default router;
