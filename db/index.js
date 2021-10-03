const { application } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  user: "app",
  password: "root",
  database: "todos",
});

module.exports = {
  pool,
};
