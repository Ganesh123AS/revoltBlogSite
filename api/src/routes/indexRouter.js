const express = require('express');
const app = express();

const posts = require("./postsRouter");
const auth = require("./authRouter");
const user = require("./usersRouter");

app.use(posts)
app.use(auth)
app.use(user)

module.exports = app;