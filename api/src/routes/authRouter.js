const { Router } = require('express');
const app = Router();
const authController = require("../controllers/authController")

app.post("/login", authController.login)
app.post("/logout", authController.logout)
app.post("/register", authController.register)

module.exports = app;