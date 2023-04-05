const express = require("express");
const router = express.Router();
const { addPost, deletePost, getPost, getPosts, updatePost } = require("../controllers/postControl");

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)

module.exports = router;