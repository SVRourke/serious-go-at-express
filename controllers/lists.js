const { pool } = require("../db");
const { newList, indexList, deleteList } = require("../db/queries");

exports.index = async (req, res) => {
  try {
    const response = await pool.query(indexList, [req.params.user_id]);
    res.send(response.rows);
    // render list
  } catch (error) {
    res.send(error);
  }
};
exports.new = (req, res) => {
  res.render("new_list");
};

exports.create = async (req, res) => {
  try {
    const response = await pool.query(newList, [
      req.body.title,
      req.params.user_id,
    ]);
    res.send(response.rows[0]);
  } catch (error) {
    res.send(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    pool.query(deleteList, [req.params.list_id]);
    res.status(202);
  } catch (error) {
    res.send(error.stack);
  }
};
