const express = require('express');
const router = express.Router();

module.exports = router;

const bodyParser = require('body-parser');
const e = require('express');
router.use(bodyParser.json());

// this might have to go into the user.js routes file and not the events
router.get('/:username/events', async (req, res, next) => {
    const { username } = req.params;

    try {
        // const events = await db('events').where({ userID: username })
        const result = await req.models.event.fetchEventsByUser(username);

        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ message: "can't get user events" })
    }

    next();
});

// home feed events = events of friends
router.get('/', async (req, res, next) => {
    const userID = req.body.username;
    const type = req.body.type;

    const user = await req.models.user.findUserByName(userID);
    const userInfo = user[0]
    delete userInfo.password;

    // filters
    // zipcode will be a bool, date and time will be in date and time format respectfully
    const filter_zipcode_bool = req.body.filter_zipcode;
    const filter_date = req.body.filter_date;
    const filter_time = req.body.filter_time;


    try {
        if (type === "home") {
            // console.log(userInfo)
            const result = await req.models.event.fetchHomeFeedEvents(userInfo, filter_zipcode_bool, filter_date, filter_time);

            if (result.length === 0){
                res.status(200).json(`There are no home events for ${userID}`);
            }
            else{
                res.status(200).json(result);
            }
        }
        else if (type === "discover") {
            const result = await req.models.event.fetchDiscoverFeedEvents(userID);
            // console.log(result)
            if (result.length === 0){
                res.status(200).json(`There are no discover events for ${userID}`);
            }
            else{
                res.status(200).json(result);
            }
        }
        else {

            const result = await req.models.event.fetchAllEvents();
            // console.log(result)
            if (result.length === 0){
                res.status(200).json(`There are no events available`);
            }
            else{
                res.status(200).json(result);
            }
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "can't get user events" })
    }

    next();
});

router.post('/', async (req, res, next) => {
    const userID = req.body.username;
    const title = req.body.title;
    const description = req.body.description;
    const zipcode = req.body.zipcode;
    const address = req.body.address;
    const time = req.body.time;
    const date = req.body.date;
    const agerestrict = req.body.agerestrict;
    const private = req.body.private;
    const close = req.body.close;

    try {
        // const events = await db('events').where({ userID: username })
        const result = await req.models.event.createEvent(userID, title, description, zipcode, address, time, date, agerestrict, private, close);

        res.status(200).json(result)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "can't create event", err})
    }

    next();
});

