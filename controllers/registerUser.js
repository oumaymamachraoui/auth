const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register new user

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      res.status(400).send({ msg: "email already used" });
    }

    const salt = 10;
    const hashedpass = await bcrypt.hash(password, salt);
    newUser = new User({ ...req.body });
    newUser.password = hashedpass;
    await newUser.save();
    const token = jwt.sign({
      id: newUser._id
    },
    process.env.SECRET_KEY);
    res.status(200).send({ msg: "registred successfully", newUser , token});
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "cannot register" }] });
  }
};
