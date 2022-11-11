const knex = require('../database/knex');
const USER_TABLE = 'users';
const EVENT_TABLE = 'events';
const FREIND_TABLE = 'friends';

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

const fetchEventsByID = async (event_id) => {
    const query = knex(EVENT_TABLE).where({ eventID: event_id });
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

const createEvent = async (title, description, zipcode, address, time, agerestrict, private, close) => {
    const query = knex(EVENT_TABLE).insert({
        title: title, description: description, Zipcode: zipcode, address: address,
        time: time, agerestriction: agerestrict, private_event: private, close_friend: close
        //date.time
    });
    const results = await query;
    // console.log(results);
    return results;
}

// find user's friends' events
const fetchHomeFeedEvents = async (userID) => {
    // const query = await knex(FREIND_TABLE).select('followedID').where({ userID });
    // const events = await query.knex(EVENT_TABLE)
    //     .join('friends as f', 'f.userID', 'events.userID')
    //     .select('events.eventID', 'f.userID', 'events.title', 'events.description')



    const query = knex.select('*').from(EVENT_TABLE).join('friends', function () {
        this.on(function () {
            this.on('friends.followedID', '=', 'events.userID')
            this.andOn('friends.userID', '=', userID)
        })
    })
    // CHECK FOR PRIVATE EVENTS AND CLOSE FRIENDS


    const results = await query;
    return results;
}

const fetchDiscoverFeedEvents = async (userID) => {
    const query = knex.select('*').from(EVENT_TABLE).join('friends', function () {
        this.on(function () {
            this.on('friends.followedID', '=', 'events.userID')
            this.andOn('friends.userID', '=', userID)
        })
    }

const deleteEvent = async (title, zipcode) => {
        const query = knex(EVENT_TABLE).delete().where({ title: title, Zipcode: zipcode });
        const results = await query;
        return results;
    }

    module.exports = {
        fetchAllEvents,
        fetchEventsByTitle,
        fetchEventsByID,
        fetchEventsByUser,
        fetchHomeFeedEvents,
        createEvent,
        deleteEvent
    }