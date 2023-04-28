const mysql = require("mysql");

// create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "abodsakka.xyz",
  user: "omar",
  password: "P5Yuh8tJ.sbIkYxS",
  database: "PA2576",
});

module.exports = pool;
