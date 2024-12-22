const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, type, phone, email, password } = req.body;
  if (!username || !type || !phone || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    type,
    phone,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error("user data is invalid");
  }
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are necessary");
  }
  res.json({ message: "login was successfull" });
});

module.exports = { registerUser, loginUser };
