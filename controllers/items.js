const { pool } = require("../db");
const {
  indexItem,
  createItem,
  updateItem,
  toggleItem,
  destroyItem,
} = require("../db/queries");

exports.index = async (req, res) => {
  try {
    const list = await pool.query(
      `
        SELECT title FROM lists 
        WHERE list_id=$1`,
      [req.params.list_id]
    );
    const items = await pool.query(indexItem, [req.params.list_id]);
    res.render("items/index", { title: list.rows[0].title, items: items.rows });
  } catch (error) {
    res.send(error);
  }
};

exports.new = (req, res) => {
  res.send("new Item form route");
};

exports.create = async (req, res) => {
  const { userId, list_id } = req.params;
  try {
    const newUser = await pool.query(createItem, [
      req.body.text,
      req.params.list_id,
    ]);
    res.send(newUser.rows[0]);
  } catch (error) {
    res.send(error);
  }
};
exports.edit = async (req, res) => {
  res.send("Item edit form route");
};
exports.update = async (req, res) => {
  res.send("Item update route");
};
exports.toggle = async (req, res) => {
  res.send("Item toggle route");
};
exports.destroy = async (req, res) => {
  res.send("Item delete route");
};
