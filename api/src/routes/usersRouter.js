const express = require('express');
const app = express();

app.get("/", (req,res)=> {
    res.json("blog post")
})

module.exports = app;