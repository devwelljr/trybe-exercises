const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "Wellington",
  password: "36261971Ww@",
  database: "rest_exercicios",
});

module.exports = connection;
