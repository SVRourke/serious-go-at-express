const { usersTable, listsTable, todosTable } = require("./tables");
const { newUser } = require("./users");
module.exports = {
  // "Migrations"
  usersTable,
  listsTable,
  todosTable,
  // SOMETHING ELSE
  newUser,
};
