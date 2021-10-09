exports.newList = `
    INSERT INTO lists (title, user_id)
    VALUES ($1, $2)
    RETURNING *
`;

exports.indexList = `
    SELECT * FROM lists
    WHERE user_id=$1
`;

exports.updateList = `
    UPDATE lists
    SET title = $2
    WHERE list_id = $1
    RETURNING *
`;

exports.deleteList = `
    DELETE FROM lists
    WHERE list_id=$1
`;
