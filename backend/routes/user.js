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
   if (req.body.username && req.body.password) {
      // const count = await req.models.user.checkUserPass(req.body.username, req.body.password);
      const userByName = await req.models.user.fetchUsersByName(req.body.username, req.body.password);
      // console.log(count)
      if (userByName.length === 0){
         // Cannot log in 
         // console.log("Incorrect username or password");
         res.status(401).json("Incorrect username or password");
      }
      else{
         // Can log in
         // const userByName = await req.models.user.fetchUsersByName(req.body.username, req.body.password);
         res.status(200).json(userByName);
      }
      next();
   } 
   else {
      const allUsers= await req.models.user.fetchAllUsers();
      res.json(allUsers);
      next();
   }
});

router.post('/', async (req, res, next) => {
   // console.log(req.body.username)
   // is username in "users"
   // const count = await req.models.user.checkUser(req.body.username)
   // count = 2;
   // console.log(count)
   try{
      const createUser = await req.models.user.createUser(req.body.username, req.body.password);
      res.status(201).json("User has been successfully created");
   }
   catch{
      // console.log("Username is already created");
      res.status(400).json("Username is already created");
   }
    next();
 });
 router.put('/', async (req, res, next) => {
    // console.log(req)

    // DOES NOT RETURN AN ERROR IF USERNAME IS NOT PROPERLY FOUND.
    // IN OTHER WORDS, IF THE TABLE DOES NOT UPDATE BECAUSE NO USERNAME IS FOUND, IT WILL NOT CAUSE AN ERROR
    try{
      const updateUser = await req.models.user.updateUserPass(req.body.username, req.body.password);
      res.status(200).json("Profile has been successfully updated");
    }
    catch{
      // state error
      res.status(500).json("Something went wrong :(");
      // console.log("hi")
    }
    next();
 });
 router.delete('/', async (req, res, next) => {
    const deleteUser = await req.models.user.deleteUser(req.body.username);
    res.status(204).end();
    next();
 });