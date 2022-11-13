// Used to create new user
const express = require('express');
const router = express.Router();
router.post('/', async (req, res, next) => {
    try {
       const body = req.body;
    //    console.log(body);
    //    console.log(req.models);
      // if (!body.agerestrict){
      //    age = 0;
      // }
      // else{
      //    age = body.age;
      // }

       const result = await req.models.user.createUser(body.username, body.password, body.zipcode, body.age);
       res.status(201).json(result);
    } catch (err) {
       console.error('Failed to create new user:', err);
       res.status(500).json({ message: err.toString() });
    }
    next();
});
module.exports = router;