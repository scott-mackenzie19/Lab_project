const express = require('express');
const router = express.Router();

module.exports = router;

const bodyParser = require('body-parser');
const e = require('express');
router.use(bodyParser.json());

router.get('/:username/following', async (req, res, next) => {

    const { username } = req.params;

    try {

        // get from friends model, the users that it is following
        const result = await req.models.friend.fetchFollowing(username);
        res.status(200).json(result);

    }

    catch (err) {
        console.error('Failed to locate who the user is following:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();

});

router.get('/:username/followers', async (req, res, next) => {

    const { username } = req.params;

    try {

        // get from friends model, the users who follow { username }
        const result = await req.models.friend.fetchFollowers(username);
        res.status(200).json(result);

    }

    catch (err) {
        console.error('Failed to locate followers:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();

});
