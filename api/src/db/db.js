// import {mysql} from "mysql";
const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "blog"
})

db.connect();

exports.module = db;