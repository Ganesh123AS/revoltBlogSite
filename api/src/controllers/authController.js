const db = require("../db/db");
const bcrypt = require('bcrypt');

const register = (req, res) => {
        try{
            const sql = "SELECT * FROM users WHERE email = ? OR username = ?"
    
            db.query(sql, [req.body.email, req.body.username], (err, data) => {
                if(err) return res.json(err)
                if(data.length) return res.status(402).json("user already exists")
                console.log(req.body)
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt);

                const sql = "INSERT INTO users(username, email, password) VALUES (?, ?, ?)"
                const values = [
                    req.body.username,
                    req.body.email,
                    hash
                ]

                db.query(sql, values, (err, data) => {
                    if(err) return res.json(err)
                    return res.status(200).json("usere has been created")
                    
                })
            })
            
        }catch(e){
            console.log(e)
        } 
};


const login = (req, res) => {
    try{

    }catch(e){
        console.log(e)
    } 
};


const logout = (req, res) => {
    try{

    }catch(e){
        console.log(e)
    }  
};

exports.login = login;
exports.register = register;
exports.logout = logout;