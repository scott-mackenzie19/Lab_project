const express = require('express');
/**
* A router is a special Express object that can be used to define how to route and manage
* requests. We configure a router here to handle a few routes specific to students
*/
const router = express.Router();

module.exports = router;

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/', async (req, res, next) => {
   if (req.query.username) {
       const userByName = await req.models.user.fetchUsersByName(req.query.username);
       res.json(userByName);
       next();
   } else {
       const allUsers= await req.models.user.fetchAllUsers();
       res.json(allUsers);
       next();
   }
});

router.post('/', async (req, res, next) => {
    // console.log(req.body.username)
    const createUser = await req.models.user.createUser(req.body.username, req.body.password);
    res.status(201).json(createUser);
    next();
 });
 router.put('/', async (req, res, next) => {
    // console.log(req)
    const updateUser = await req.models.user.updateUserPass(req.body.username, req.body.password);
    res.json(updateUser);
    next();
 });
 router.delete('/', async (req, res, next) => {
    const deleteUser = await req.models.user.deleteUser(req.body.username);
    res.status(204).end();
    next();
 });