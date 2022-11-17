// Used to get access token from /controller/user.js
const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();
router.post('/', async (req, res, next) => {
    try {
        const body = req.body;

        const result = await UserController.authenticateUser(body.username, body.password);
        if (result === null) {
            res.status(500).json('Failed to authenticate user');
        }
        else {
            res.status(201).json(result);
        }
    } catch (err) {
        console.error('Failed to authenticate user:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
module.exports = router;