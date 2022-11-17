const knex = require('../database/knex');

const FRIEND_TABLE = 'friends';
const fetchFollowing = async (userID) => {
    const query = knex(FRIEND_TABLE).select('followedID').select('close_friend').where({userID});
    const results = await query;
    // console.log(results.length)
    // console.log(results);
    return results;
}

const fetchFollowing_withpfp = async (userID) => {
    const query = knex(FRIEND_TABLE).where({userID}).join('users as u', 'u.username', 'friends.followedID').select('followedID').select('pfp');
    const results = await query;
    // console.log(results.length)
    //.where({userID})
    // console.log(results);
    return results;
}

const fetchFollowers = async (followedID) => {
    const query = knex(FRIEND_TABLE).select('userID').select('close_friend').where({followedID});
    const results = await query;
    // console.log(results.length)
    // console.log(results);
    return results;
}

const fetchCloseFriends = async (userID) => {
    const query = knex(FRIEND_TABLE).select('followedID').select('close_friend').where({userID, close_friend:true});
    const results = await query;
    // console.log(results.length)
    // console.log(results);
    return results;
}

module.exports = {
    fetchFollowing,
    fetchFollowing_withpfp,
    fetchFollowers,
    fetchCloseFriends
}