import express from "express";
import { deleteUser, loginUser, logoutUser, registerUser, test, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/test").get(test);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/update").put(updateUser);
router.route("/delete").delete(deleteUser);

export default router