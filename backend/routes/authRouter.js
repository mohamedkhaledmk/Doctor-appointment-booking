const express = import("express");
const { register, login } = import("../controllers/authController");

const authRouter = express.Router();

export default authRouter;
