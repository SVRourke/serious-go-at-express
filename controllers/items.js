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

// TODO: Create View
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

// TODO Create Edit Form
exports.edit = async (req, res) => {
  // GET Item
  // DISPLAY View With Item info as variables
  res.send("Item edit form route");
};

exports.update = async (req, res) => {
  try {
    const updated = await pool.query(updateItem, [
      req.params.item_id,
      req.body.text,
    ]);
    res.send(updated.rows[0]);
  } catch (error) {
    res.send(error);
  }
};

exports.toggle = async (req, res) => {
  // GET ITEM
  // UPDATE ITEM
  // RETURN ITEM
  res.send("Item toggle route");
};

exports.destroy = async (req, res) => {
  try {
    const deletion = await pool.query(destroyItem, [params.item_id]);
    res.status(200);
  } catch (error) {
    res.send(error);
  }
};
