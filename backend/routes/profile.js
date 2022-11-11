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
  
        if (result.length === 0){
           res.status(500).json("User not found");
        }
        else{
           const user = result[0];
           delete user.password;
           res.status(201).json(user);
        }
    } 
    catch (err) {
    console.error('Failed to load current user:' , err);
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
