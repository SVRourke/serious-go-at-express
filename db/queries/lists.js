exports.newList = `
    INSERT INTO lists (title, user_id)
    VALUES ($1, $2)
    RETURNING *
`;

exports.indexList = `
    SELECT * FROM lists
    WHERE user_id=$1
`;

exports.deleteList = `
    DELETE FROM lists
    WHERE list_id=$1
`;
