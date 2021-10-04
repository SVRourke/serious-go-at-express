exports.indexItem = `
    SELECT * FROM todos
    WHERE list_id=$1
`;
exports.createItem = `
    INSERT INTO todos(text, list_id)
    VALUES($1, $2)
    RETURNING *
`;
exports.updateItem = `
    UPDATE todos
    SET text = $2
    WHERE todo_id = $1
    RETURNING *
`;
exports.toggleItem = `

`;
exports.destroyItem = `

`;
