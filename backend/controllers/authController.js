import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "3d",
    }
  );
};

export const register = async (req, res) => {
  try {
    let user = null;
    const { email, name, role, gender, photo, password } = req.body;
    if (role == "patient") {
      user = await User.findOne({ email });
    } else {
      user = await User.findOne({ email });
    }

    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (role == "patient") {
      user = new User({
        name,
        email,
        password: hashedPassword,
        photo,
        gender,
      });
    }
    if (role == "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashedPassword,
        photo,
        gender,
      });
    }
    console.log("first", user);
    await user.save();
    res.status(200).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error. Try Again..",
    });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(password);
    const patient = await User.findOne({ email });

    const doctor = await Doctor.findOne({ email });
    let user = null;
    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found.." });
    }
    console.log(user);

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credintials" });
    }

    const token = generateToken(user);

    const { role, hashedPassword, appointments, ...rest } = user._doc;
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      data: { ...rest },
      role,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Login",
    });
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
