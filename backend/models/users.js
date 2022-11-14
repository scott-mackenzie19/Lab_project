const knex = require('../database/knex');
const bcrypt = require('bcrypt');
const USER_TABLE = 'users';
const fetchAllUsers = async () => {
    const query = knex(USER_TABLE);
    const results = await query;
    // console.log(results.length)
    // console.log(results);
    return results;
}
// const fetchUsersByName = async (name, pass) => {
//     const query = knex(USER_TABLE).where({ username:name, password:pass});
//     const results = await query;
//     return results;
// }

const findUserByName = async (username) => {
    const query = knex(USER_TABLE).where({ username });
    const result = await query;
    // console.log(result)
    return result;
}

const authenticateUser = async (username, password) => {
    const users = await findUserByName(username);

    if (users.length === 0) {
        console.error(`No users matched the username: ${username}`);
        return null;
    }
    const user = users[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        delete user.password;
        return user;
    }
    return null;
}

const updateUserPass = async (username, password)  => {
    // console.log(pass)
    // console.log(name)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const query = knex(USER_TABLE).update({password:hashedPassword}).where({username});
    const results = await query;
    return results;
}
const createUser = async (username, password, zipcode, age) => {
    const salt = await bcrypt.genSalt(10);
    // console.log(password, salt)
    const hashedPassword = await bcrypt.hash(password, salt);
    const query = knex(USER_TABLE).insert({username, password:hashedPassword, zipcode, age});
    const results = await query;
    // console.log(results);
    return results;
}
const deleteUser = async (username) => {
    const query = knex(USER_TABLE).delete().where({username});
    const results = await query;
    return results;
}

module.exports = {
    fetchAllUsers,
    // fetchUsersByName,
    findUserByName,
    authenticateUser,
    createUser,
    updateUserPass,
    deleteUser
}