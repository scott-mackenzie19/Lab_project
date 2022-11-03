const knex = require('../database/knex');
const USER_TABLE = 'users';
const EVENT_TABLE = 'events';

const fetchAllEvents = async () => {
    const query = knex(EVENT_TABLE);
    const results = await query;
    // console.log(results.length)
    // console.log(results);
    return results;
}

const fetchEventsByTitle = async (eventName) => {
    const query = knex(EVENT_TABLE).where({ title: eventName });
    const results = await query;
    return results;
}

const fetchEventsByUser = async (name) => {
    const query = knex(USER_TABLE).where({ username: name });
    const results = await query;
    return results;
}

const createEvent = async (title, description, zipcode, address, time) => {
    const query = knex(EVENT_TABLE).insert({
        title: title, description: description, Zipcode: zipcode, address: address,
        time: time
    });
    const results = await query;
    // console.log(results);
    return results;
}
const deleteEvent = async (title, zipcode) => {
    const query = knex(EVENT_TABLE).delete().where({ title: title, Zipcode: zipcode });
    const results = await query;
    return results;
}

module.exports = {
    fetchAllEvents,
    fetchEventsByTitle,
    fetchEventsByUser,
    findUserByName,
    createEvent,
    deleteEvent
}