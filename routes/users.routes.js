import express from "express";
import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";

import { checkAuth, validateUserId, validateUserEmail } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", checkAuth, getUser);
router.get("/:id", validateUserId, getUserById);
router.post("/", validateUserEmail, createUser);
router.put("/:id", validateUserId, updateUser);
router.delete("/:id", validateUserId, deleteUser);

export default router;
