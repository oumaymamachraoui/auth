const express = require("express");
const { login } = require("../controllers/loginUser");
const { register } = require("../controllers/registerUser");
const {
  registerValidator,
  validator,
  loginValidation,
} = require("../middelware/validator");
const isAuth = require("../middelware/isAuth");

const router = express.Router();

router.post("/register", registerValidator(), validator, register);

router.post("/login", login);

router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
