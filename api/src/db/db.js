const mysql= require('mysql2');

// Create a MySQL pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12qwerty34',
    database: 'blog',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
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