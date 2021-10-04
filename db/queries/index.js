const { usersTable, listsTable, todosTable } = require("./tables");

const { newUser } = require("./users");

const { newList, indexList, deleteList } = require("./lists");

const {
  indexItem,
  createItem,
  updateItem,
  toggleItem,
  destroyItem,
} = require("./items");

module.exports = {
  // "Migrations"
  usersTable,
  listsTable,
  todosTable,

  // Users
  newUser,

  // Lists
  newList,
  indexList,
  deleteList,

  // Items
  indexItem,
  createItem,
  updateItem,
  toggleItem,
  destroyItem,
};
