const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register new user

exports.register = async (req, res) => {
  try {
    const { nom, prenom, adresse, age, email, password, phone } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).send({ msg: "email already used" });
    }
    const salt = 10;
    const hashedpass = await bcrypt.hash(password, salt);
    const newUser = new User({ ...req.body });
    newUser.password = hashedpass;
    await newUser.save();
    const token = jwt.sign({
      id: newUser._id
    },
    process.env.SECRET_KEY);
    return res.status(200).send({ msg: "registred successfully", user: newUser , token});
  } catch (error) {
    return res.status(400).send({ errors: [{ msg: "cannot register" }] });
  }
};

