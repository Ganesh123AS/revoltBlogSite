const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require("../db/db");



// Validation rules for the input fields
const validationRules = [
  check('username').trim().isLength({ min: 3 }),
  check('email').trim().isEmail(),
  check('password').isLength({ min: 6 })
];

// Route handler for creating a new user
const register = (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // Check if user already exists
  const q = 'SELECT * FROM users WHERE email = ? OR username = ?';
  const values = [req.body.email, req.body.username];

  pool.query(q, values, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }

    if (results.length > 0) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password and insert the new user
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    };

    const insertSql = 'INSERT INTO users SET ?';

    pool.query(insertSql, newUser, (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
      }

      return res.status(201).json({ message: 'User created successfully' });
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
      const isPassword = bcrypt.compareSync(req.body.password, data[0].password);

      if(!isPassword) return res.status(400).json("password or username doesnot match");

      const token = jwt.sign({id:data[0].id}, "jwtkey");
      const {password, ...other} = data[0]
      res.cookie("cookie_token", token, {
          httpOnly: true
      }).status(200).json(other)
    })
  };

// Route handler for Logout
const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("User logout successfully")
};

module.exports = {
  validationRules,
  register,
  login,
  logout,
}