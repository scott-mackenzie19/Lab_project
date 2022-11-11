const knex = require('../database/knex');
const bcrypt = require('bcrypt');
const LIKES_TABLE = 'likes';

// get comments and display on page
const fetchAllComments = async (comment, userID/*, eventID*/) => {
    const query = knex(COMMENTS_TABLE);
    const results = await query;

    return results;
}

const updateComment = async (comment, userID/*, eventID*/) => {
    const query = knex(COMMENTS_TABLE).update({comment}).where({userID,eventID});
    const results = await query;
    return results;
}

// handle post request and store comment 
const createComment = async (comment, userID/*, eventID*/) => {
    const query = knex(COMMENTS_TABLE).insert({comment});
    const results = await query;
    return results;
}

// might not need
const deleteComment = async (userID, eventID) => {
    const query = knex(COMMENTS_TABLE).delete().where({userID, eventID});
    const results = await query;
    return results;
}



module.exports = {
    fetchAllComments,
    updateComment,
    createComment,
    deleteComment

}