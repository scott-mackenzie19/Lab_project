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
        const result = await req.models.events.fetchEventsByUser(username);

        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ message: "can't get user events" })
    }

    next();
});

// home feed events = events of friends
router.get('/', async (req, res, next) => {
    const username = req.params.username;
    const type = req.params.type;

    try {
        if (type === "home") {
            const result = await req.models.events.fetchHomeFeed(username);
            res.status(200).json(result)
        }
        else if (type === "discover") {
            const result = await req.models.events.fetchDiscoverFeed(username);
            res.status(200).json(result)
        }
        else {
            error = 0
        }
    } catch (err) {
        res.status(500).json({ message: "can't get user events" })
    }

    next();
});

router.post('/', async (req, res, next) => {
    const title = req.params.title;
    const description = req.params.description;
    const zipcode = req.params.zipcode;
    const address = req.params.address;
    const time = req.params.time;
    const agerestrict = req.params.agerestrict;
    const private = req.params.private;
    const close = req.params.close;

    try {
        // const events = await db('events').where({ userID: username })
        const result = await req.models.events.createEvent(title, description, zipcode, address, time, agerestrict, private, close);

        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ message: "can't create event" })
    }

    next();
});

