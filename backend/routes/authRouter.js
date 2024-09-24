import express from "express";
import { register, login, getUsers } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.route("/users").get(getUsers);

authRouter.route("/register").post(register);

authRouter.route("/login").post(login);

export default authRouter;
