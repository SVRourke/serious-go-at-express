const { pool } = require("../db");
const { newUser } = require("../db/queries");
exports.new = (req, res) => {
  res.render("new_users");
};

exports.create = async (req, res) => {
  try {
    const response = await pool.query(newUser, [req.body.name, req.body.email]);
    res.send(response.rows[0]);
  } catch (error) {
    res.send(error);
  }
};
