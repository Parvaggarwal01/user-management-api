import express from "express";
import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";

import {
  checkAuth,
  validateUserId,
  validateUser,
  validateUserById,
} from "../middlewares/auth.js";

const router = express.Router();

router.get("/", checkAuth, getUser);
router.get("/id", validateUserById, getUserById);
router.post("/", validateUser, createUser);
router.put("/update", validateUserId, validateUser, updateUser);
router.delete("/:id", validateUserId, deleteUser);

export default router;
