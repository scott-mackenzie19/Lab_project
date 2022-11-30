const knex = require('../database/knex');
const USER_TABLE = 'users';
const EVENT_TABLE = 'events';
const FRIEND_TABLE = 'friends';
export let array = Array(50).fill();
const  fetchAllEvents = async() =>{
    const query = knex(EVENT_TABLE);
    const results = await query;
     array = Array(results.length).fill();
     for (let i = 0; i<results.length; i++) {
        array[i] = results[i]
        
     }
     console.log("Results: \n", results)
     console.log(results[4].userID)


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

const fetchEventsByUser = async (userID) => {
    // const query = knex(USER_TABLE).where({ username: name });
    // const events = await knex(EVENT_TABLE)
    //     .join('users as u', 'u.username', 'events.userID')
    //     .select('events.eventID', 'u.username', 'events.title', 'events.description')
    //     .where({ userID: name })
    const events = await knex(EVENT_TABLE).where({userID})
    const results = await events;
    return results;
}

const createEvent =  async (userID, title, description, zipcode, address, time, date, agerestrict, private1, close) => {
    const query = await knex(EVENT_TABLE).insert({
        userID: userID, title: title, description: description, zipcode: zipcode, address: address,
        time: time, date: date, min_agerestrict: agerestrict, private_event: private1, close_friend: close
        //date.time
    });
    // const results = await query;
    // console.log(results);
    return query;
}

// find user's friends' events
const fetchHomeFeedEvents = async (userInfo, zipcode_bool, date_filter, time_filter) => {
    // const query = await knex(FREIND_TABLE).select('followedID').where({ userID });
    // const events = await query.knex(EVENT_TABLE)
    //     .join('friends as f', 'f.userID', 'events.userID')
    //     .select('events.eventID', 'f.userID', 'events.title', 'events.description')



    // const query = knex.select('*').from(EVENT_TABLE).join('friends', function () {
    //               this.on('events.userID', '=', 'friends.followedID').onIn('friends.userID', [userID])})

    const userID = userInfo.username;
    const zipcode = userInfo.zipcode;
    const age = userInfo.age;


    // Finding everyone the user is following
    const subquery = knex(FRIEND_TABLE).where({ userID }).select('followedID');
    // console.log("HI")


    // Selecting 
    // const subquery2 = knex(USER_TABLE).where('username', 'in', subquery).select('username');

    // Finding all events hosted by who the user is following
    const subquery1 = knex(EVENT_TABLE).where('userID', 'in', subquery).select('userID');
    const subquery2 = knex(EVENT_TABLE).where('userID', 'in', subquery).select('eventID');
    // returning mutual friends
    const subquery3 = knex(FRIEND_TABLE).where('userID', 'in', subquery1).andWhere('followedID', userID).select('userID');
    // event ID's of events user cannot attend (event host is now following the user)
    const subquery4 = knex(EVENT_TABLE).where('userID', 'not in', subquery3).andWhere('private_event', true).select('eventID');

    // returning close friends
    const subquery5 = knex(FRIEND_TABLE).where('userID', 'in', subquery1).andWhere('followedID', userID).andWhere('close_friend', true).select('userID');
    // event ID's of events user cannot attend (not a close friend)
    const subquery6 = knex(EVENT_TABLE).where('userID', 'not in', subquery5).andWhere('close_friend', true).select('eventID');

    // const subquery3 = query1.select('eventID');

    // events that the user can attend
    query = knex(EVENT_TABLE).where('eventID', 'in', subquery2).andWhere('eventID', 'not in', subquery4)
        .andWhere('eventID', 'not in', subquery6).andWhere('min_agerestrict', '<=', age)
        .orWhere('userID', '=', userID);

    //     const query = query1.where('*', 'not in', query2)


    // repeat processes for all filters
    if (zipcode_bool) {
        query = knex(EVENT_TABLE).where('eventID', 'in', query.select('eventID')).andWhere('zipcode', '=', zipcode)
    }
    if (date_filter) {
        query = knex(EVENT_TABLE).where('eventID', 'in', query.select('eventID')).andWhere('date', '=', date_filter)
    }
    if (time_filter) {
        query = knex(EVENT_TABLE).where('eventID', 'in', query.select('eventID')).andWhere('time', '>=', time_filter)
    }

    // User enters a specific date and filter by that date. year/month/day
    // Entered time is any time at or after 
    // CHECK CurrDate function, make sure we can exlcude the ones of dates past.
    // also check age


    // const query = knex.select('username').from(USER_TABLE).join(FRIEND_TABLE, function () {
    //                this.on('users.username', '!=', 'friends.followedID')}).where('userID', userID)//knex.select('followedID').from(FRIEND_TABLE))

    // const query1 = knex.select('*').from(USER_TABLE).where()
    // const query = knex.select('*').from(EVENT_TABLE).join(FRIEND_TABLE, function () {
    //               this.on('events.userID', '!=', 'friends.followedID')
    //               .onIn('friends.userID', userID)})
    // andOn.('events.min', '<=', 'users.age')
    // CHECK FOR PRIVATE EVENTS AND CLOSE FRIENDS


    const results = await query;
    // console.log(query)
    // console.log(results)

    return results;
}

const fetchDiscoverFeedEvents = async (userID) => {
    // const query = knex.select('*').from(EVENT_TABLE).join('friends', function () {
    //     this.on('events.userID', '<>', 'friends.followedID').onIn('friends.userID', [userID])})

    const subquery = knex(FRIEND_TABLE).where({ userID }).select('followedID');
    const subquery2 = knex(USER_TABLE).where('username', 'not in', subquery).andWhere('username', '!=', userID).select('username');
    const query = knex(EVENT_TABLE).where('userID', 'in', subquery2).andWhere('private_event', false).andWhere('close_friend', false);

    const results = await query;

    return results;
}

const deleteEvent = async (title, zipcode) => {
    const query = knex(EVENT_TABLE).delete().where({ title: title, zipcode: zipcode });
    const results = await query;
    return results;
}

module.exports = {
    fetchAllEvents,
    fetchEventsByTitle,
    fetchEventsByID,
    fetchEventsByUser,
    fetchHomeFeedEvents,
    fetchDiscoverFeedEvents,
    createEvent,
    deleteEvent
}