const { pool } = require("./index");
const { usersTable, listsTable, todosTable } = require("./queries");

pool.query(usersTable, (e, r) => console.log(e ? e : "created users"));
pool.query(listsTable, (e, r) => console.log(e ? e : "created lists"));
pool.query(todosTable, (e, r) => console.log(e ? e : "created todos"));
