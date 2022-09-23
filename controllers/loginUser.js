const User = require("../models/User");
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken')
// login user

exports.login = async (req, res) => {
    const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (!existUser) {
      res.status(400).send({ msg: "bad credential" });
    }
    const checkpass = await bcrypt.compare(password, existUser.password);
    if (!checkpass) {
      res.status(400).send({ msg: "bad credential" });
    }
    const token = jwt.sign({
      id: existUser._id
    },
    process.env.SECRET_KEY);
    res.status(200).send( {msg :"login successfully",existUser, token})
  } catch (error) {
    res.status(400).send({ msg: "cannot login " });
  }
};
