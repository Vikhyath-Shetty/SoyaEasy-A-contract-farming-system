const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, type, phone_number, email, password } = req.body;
  if (!username || !type || !phone_number || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.json({ message: "registration was successfull" });
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
