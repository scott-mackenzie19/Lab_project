const knex = require('../database/knex');
const USER_TABLE = 'users';
const fetchAllUsers = async () => {
    const query = knex(USER_TABLE);
    const results = await query;
    return results;
}
const fetchUsersByName = async (name) => {
    const query = knex(USER_TABLE).where({ username:name});
    const results = await query;
    return results;
}

const updateUserPass = async (name, pass)  => {
    // console.log(pass)
    // console.log(name)
    const query = knex(USER_TABLE).update({password:pass}).where({username:name});
    const results = await query;
    return results;
}
const createUser = async (name, pass) => {
    const query = knex(USER_TABLE).insert({username:name, password:pass});
    const results = await query;
    return results;
}
const deleteUser = async (name) => {
    const query = knex(USER_TABLE).delete().where({username:name});
    const results = await query;
    return results;
}

module.exports = {
    fetchAllUsers,
    fetchUsersByName,
    createUser,
    updateUserPass,
    deleteUser
 }