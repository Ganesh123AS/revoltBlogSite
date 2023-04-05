const express = require("express");
const router = express.Router();
const { validationRules, register, login, logout } = require("../controllers/authControl");

router.post("/login", login);
router.post("/logout", logout);
router.post("/register",validationRules, register);

module.exports = router;