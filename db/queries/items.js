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

`;
exports.toggleItem = `

`;
exports.destroyItem = `

`;
