import express from "express";
import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";

import { checkAuth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", checkAuth, getUser);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
