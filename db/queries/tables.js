exports.usersTable = `
    CREATE TABLE IF NOT EXISTS users (
        user_id serial PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE
    )`;

exports.listsTable = `
    CREATE TABLE IF NOT EXISTS lists (
        list_id serial PRIMARY KEY,
        title VARCHAR(50) NOT NULL
    )`;

exports.todosTable = `
    CREATE TABLE IF NOT EXISTS todos (
        todo_id serial PRIMARY KEY,
        text VARCHAR(200) NOT NULL UNIQUE,
        list_id INT NOT NULL,
        FOREIGN KEY (list_id)
            REFERENCES lists (list_id)
    )`;
