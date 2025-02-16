import User from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import fs from "fs";
import jwt from "jsonwebtoken";

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
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username: user.username,
        image: user.image,
        registerTime: user.createdAt,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION }
    );
    user.token = token;
    console.log(token, "token");
    console.log("Registration Successful");
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRATION * 24 * 60 * 60 * 1000
      ),
    };
    await user.save();
    res.status(201).cookie("authToken", token, options).json({
      message: "User Registered Successfully",
      token,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const error = [];
    const user = await User.findOne({ email });
    if (!email) {
      error.push("Email is required");
    }
    if (email && !validator.isEmail(email)) {
      error.push("Email is not valid");
    }
    if (!password) {
      error.push("Password is required");
    }
    if (error.length > 0) {
      return res.status(400).json({ errors: error });
    }
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect Password" });
    }
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username: user.username,
        image: user.image,
        registerTime: user.createdAt,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION }
    );

    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRATION * 24 * 60 * 60 * 1000
      ),
    };
    user.token = token;
    await user.save();
    res.status(200).cookie("authToken", token, options).json({
      message: "User Logged In Successfully",
      token,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
