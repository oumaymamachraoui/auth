const User = require("../models/User");
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken')
// login user

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    const checkpass = await bcrypt.compare(password, foundUser.password);
    if (!checkpass) {
      return res.status(400).send({ msg: "bad credential" });
    }
    const token = jwt.sign({
      id: foundUser._id
    },
    process.env.SECRET_KEY);
    return res.status(200).send( {msg :"login successfully",user: foundUser, token})
  } catch (error) {
    res.status(400).send({ msg: "cannot login " });
  }
};
