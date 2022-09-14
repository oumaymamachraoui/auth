const express = require("express");
const { login } = require("../controllers/loginUser");
const { register } = require("../controllers/registerUser");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);
module.exports = router;
