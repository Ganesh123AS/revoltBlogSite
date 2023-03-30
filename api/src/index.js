const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const db = require("./db/db");
port = 5000;
const indexRouter = require("./routes/indexRouter");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.use(indexRouter);





app.listen(port, "localhost", (req, res) => {
    console.log(`app is listening on port: ${port}`);
})