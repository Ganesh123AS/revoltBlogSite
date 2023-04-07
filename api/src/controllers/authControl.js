const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require("../db/db");

const register = (req, res) => {
  // Check if user already exists
  const q = 'SELECT * FROM users WHERE email = ? OR username = ?';

  pool.query(q, [req.body.email, req.body.username], (error, data) => {
    if (error) return res.status(500).json({ error: 'Server error' });
    if (data.length) return res.status(409).json("User already exists!");

    // Hash the password and insert the new user
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`, `role`) VALUES (?)";
    const values = [req.body.username, req.body.email, hashedPassword, req.body.role];

    pool.query(q, [values], (error, data) => {
      if (error) return res.status(500).json({ error: 'Server error' });
      return res.status(200).json({ message: 'User created successfully' });
    });
  });
}

// Route handler for Login
const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?"
  
    pool.query(q, [req.body.username], (err, data) => {
      if(err) return res.status(500).json(err);
      if(data.length === 0) return res.status(404).json("user not found")
  
      // chceking password
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password,
      );

      if(!isPasswordCorrect)
       return res.status(400).json("password or username does not match");

      const token = jwt.sign({id: data[0].id}, "jwtkey");
      
      const {password, ...other} = data[0]
      res.cookie("access_token", token, {
          httpOnly: true
      }).status(200).json(other)
    })
  };

  
const getRole = (req, res) => {
  const q = 'SELECT * FROM users' ;

  pool.query(q, (err, data) => {
    console.log(data)
    if(err) return res.status(500).send(err)
    return res.status(200).json(data)
    
  })
}


// Route handler for Logout
const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("User logout successfully")
};

exports.register = register;
exports.login = login;
exports.getRole = getRole;
exports.logout= logout;