const mysql= require('mysql2/promise');

// Create a MySQL pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12qwerty34',
    database: 'blog',
  });

  // const pool = mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   password: '12qwerty34',
  //   database: 'blog',
  // });

  module.exports = {
    pool,
  }