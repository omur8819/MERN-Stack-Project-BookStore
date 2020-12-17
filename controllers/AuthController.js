const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { check, validationResult} = require("express-validator");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const validationErr = validationResult(req);
  if(validationErr.errors.length > 0) {
    return res
      .status(400)
      .json({ errors: validationErr.array() });
  }
  
  const userData = await User.findOne({ email: email });
  if (userData) {
    return res
      .status(400)
      .json({ errors: [{ message: "email already exists!!" }] });
  }

  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password, salt)

  const user = new User({
    firstName,
    lastName,
    email,
    password: newPassword, //crypted password
  });
  await user.save();

  //TODO: Error handling for saving
  res.send("Register Completed.");
};

exports.authLogin = (req, res) => {
  // TODO: Auth.
  // TODO: Login func.
  res.send("Login Completed");
};