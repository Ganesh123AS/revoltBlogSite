const express = require("express");
const router = express.Router();
const PostController = require("../controllers/postControl");

router.get("/posts", PostController.getPosts)
router.get("/posts/:id", PostController.getPost)
router.post("/posts", PostController.addPost)
router.delete("/posts/:id", PostController.deletePost)
router.put("/posts/:id", PostController.updatePost)

module.exports = router;