import User from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import fs from "fs";

export const userRegister = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const image = req.file ? req.file.path : null;
    const error = [];
    const existingUserEmail = await User.findOne({ email });
    const existingUserName = await User.findOne({ username });
    if (existingUserEmail) {
      error.push("Email is already taken");
    }
    if (existingUserName) {
      error.push("Username is already taken");
    }
    if (!username) {
      error.push("Username is required");
    }
    if (!email) {
      error.push("Email is required");
    }
    if (email && !validator.isEmail(email)) {
      error.push("Email is not valid");
    }
    if (!password) {
      error.push("Password is required");
    }
    if (!confirmPassword) {
      error.push("Confirm Password is required");
    }
    if (password && confirmPassword && password !== confirmPassword) {
      error.push("Passwords do not match");
    }
    if (password && password.length < 6) {
      error.push("Password must be at least 6 characters");
    }
    if (!req.file) {
      error.push("Image file is required");
    }
    if (error.length > 0) {
      if (image) {
        fs.unlink(image, (err) => {
          if (err) {
            console.error(`Failed to delete file: ${image}`, err);
          }
        });
      }
      return res.status(400).json({ errors: error });
    }

    const user = new User({
      username,
      email,
      password: await bcrypt.hash(password, 10),
      image,
    });
    await user.save();
    res.status(201).json({
      message: "User Registered Successfully",
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
