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
    // const query = knex(USER_TABLE).where({ username: name });
    const events = await knex(EVENT_TABLE)
        .join('users as u', 'u.username', 'events.userID')
        .select('events.eventID', 'u.username', 'events.title', 'events.description')
        .where({ userID: name })
    const results = await events;
    return results;
}

const createEvent = async (title, description, zipcode, address, time) => {
    const query = knex(EVENT_TABLE).insert({
        title: title, description: description, Zipcode: zipcode, address: address,
        time: time
        //date.time
    });
    const results = await query;
    // console.log(results);
    return results;
}

// find user's friends' events
// const fetchHomeFeedEvents = aysnc(userID) => {
//     const query = await knex(USER_TABLE).select()
// };

const deleteEvent = async (title, zipcode) => {
    const query = knex(EVENT_TABLE).delete().where({ title: title, Zipcode: zipcode });
    const results = await query;
    return results;
}

module.exports = {
    fetchAllEvents,
    fetchEventsByTitle,
    fetchEventsByUser,
    fetchHomeFeedEvents,
    createEvent,
    deleteEvent
}