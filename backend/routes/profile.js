const express = require('express');
const router = express.Router();

module.exports = router;

const bodyParser = require('body-parser');
const e = require('express');
router.use(bodyParser.json());


router.get('/:username', async (req, res, next) => {

    const { username } = req.params;

    try {

        const result = await req.models.user.findUserByName(username);

        if (result.length === 0) {
            res.status(500).json("User not found");
        }
        else {
            const user = result[0];
            delete user.password;
            const events = await req.models.event.fetchEventsByUser(username);
            const following = await req.models.friend.fetchFollowing_withpfp(username);
            // const following = following_result.followedID;
            res.status(201).json({user, events, following});
        }
    }
    catch (err) {
        console.error('Failed to load current user:', err);
        res.status(500).json({ message: err.toString() });
    }

    next();
});

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

router.get('/:username/close-friends', async (req, res, next) => {

    const { username } = req.params;

    try {

        // get from friends model, the users who follow { username }
        const result = await req.models.friend.fetchCloseFriends(username);
        res.status(200).json(result);

    }

    catch (err) {
        console.error('Failed to locate close friends:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();

});


router.put('/:username/edit', async (req, res, next) => {

    const { username } = req.params;
    const bio = req.body.bio;
    const zipcode = req.body.zipcode;
    const anon = req.body.anon;
    const age = req.body.age;
    // const password = req.body.password;

    try {

        // get from friends model, the users who follow { username }
        const result = await req.models.user.updateUserInfo(username, bio, zipcode, anon, age);
        res.status(200).json(result);

    }

    catch (err) {
        console.error('Failed to update the user information:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();

});

router.put('/:username/change-password', async (req, res, next) => {

    const { username } = req.params;
    const previouspass = req.body.previouspass;
    const newpass = req.body.newpass;

    try {

        const comp = await req.models.user.authenticateUser(username, previouspass);

        if (comp === null) {
            res.status(500).json('Failed to authenticate user');
        }
        // get from friends model, the users who follow { username }
        else {
            const result = await req.models.user.updateUserPass(username, previouspass, newpass);
            res.status(200).json(result);

        }

    }

    catch (err) {
        console.error('Failed to update the user password:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
