const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please enter username"],
    },
    type: {
      type: String,
      required: [true, "please enter the type field"],
    },
    phone: {
      type: String,
      required: [true, "please enter phone number"],
    },
    email: {
      type: String,
      required: [true, "please enter email"],
    },
    password: {
      type: String,
      required: [true, "please enter password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
