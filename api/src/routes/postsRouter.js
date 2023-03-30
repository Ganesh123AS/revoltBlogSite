const { Router } = require('express');
const app = Router();
const postController = require("../controllers/postController")

app.get("/post", postController.getPost)
app.post("/post", postController.postPost)

module.exports = app;