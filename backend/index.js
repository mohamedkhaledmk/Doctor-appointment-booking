import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// db connect
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(` DB connected successfully! 💚 `);
  } catch (error) {
    console.log("Error Connecting the db", error);
  }
};
// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: true,
  })
);

app.use("/api/auth", authRouter);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`);
});
