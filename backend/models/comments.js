const knex = require('../database/knex');
const bcrypt = require('bcrypt');
const LIKES_TABLE = 'likes';

// get comments and display on page
const fetchCommentsByEventID = async (eventID) => {
    const query = knex(COMMENTS_TABLE).where({eventID});
    const results = await query;

    return results;
}

// handle post request and store comment 
const createComment = async (userID, eventID, comment) => {
    const query = knex(COMMENTS_TABLE).insert({userID,eventID,comment});
    const results = await query;
    return results;
}

// might not need
const deleteComment = async (userID, eventID, comment) => {
    const query = knex(COMMENTS_TABLE).delete().where({userID, eventID, comment});
    const results = await query;
    return results;
}



module.exports = {
    fetchCommentsByEventID,
    createComment,
    deleteComment

}