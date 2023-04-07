const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authControl");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/admin/role", AuthController.getRole);
router.post("/logout", AuthController.logout);

module.exports = router;