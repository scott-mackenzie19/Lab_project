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
router.get('/home', async (req, res, next) => {
    const username = req.params;

    try {
        const result = await req.models.events.fetchHomeFeed(username);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ message: "can't get user events" })
    }

    next();
});

router.post('/create-events', async (req, res, next) => {
    // const { username } = req.params;

    // try {
    //     // const events = await db('events').where({ userID: username })
    //     const result = await req.models.events.fetchEventsByUser(username);

    //     res.status(200).json(result)
    // } catch (err) {
    //     res.status(500).json({ message: "can't get user events" })
    // }

    next();
});

