const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAuth = async (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
      res.status(400).send({ errors, msg: "not headers authorized" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const foundUser = await User.findOne({ _id: decoded.id });
    if (!foundUser) {
      res.status(400).send({ errors, msg: "not user authorized" });
    }
    req.user = foundUser;
    next();

};
module.exports = isAuth;
