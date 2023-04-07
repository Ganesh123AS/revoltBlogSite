const express = require('express');
const authRoutes = require("./routes/authRouter");
const postRoutes = require("./routes/postsRouter");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const bodyParser = require('body-parser');
const {pool} = require('./db/db');
const cors = require("cors");

const app = express();
port = 5000;


app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../revolt/public/upload");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), function (req,res) {
    const file = req.file;
    res.status(200).json(file);
})

app.use(authRoutes);
app.use(postRoutes);


pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log('Connected to the MySQL server.');
})

app.listen(port, "localhost", (req, res) => {
    console.log(`app is listening on port: ${port}`);
});