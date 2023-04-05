const express = require('express');
const authRoutes = require("./routes/authRouter");
const postRoutes = require("./routes/postsRouter");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const bodyParser = require('body-parser');

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

app.post("/api/upload", upload.single("file"), function (req,res) {
    const file = req.file;
    res.status(200).json(file.filename);
})

app.use("/api/auth", authRoutes);
app.use("api/posts", postRoutes);

app.listen(port, "localhost", (req, res) => {
    console.log(`app is listening on port: ${port}`);
})