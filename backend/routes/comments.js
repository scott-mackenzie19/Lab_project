const express = require('express' );
const router = express.Router();

router.get('/', async (req, res, next) => {
    const allComments = await req.models.comments.fetchAllComments ();
    res.json(allComments);
    next();
})

router.post('/', async (req, res, next) => {
    try {
       const body = req.body;
    //    console.log(body);
    //    console.log(req.models);
       const result = await req.models.comments.createComment(body.comments, body.userID);
       res.status(201).json(result);
    } catch (err) {
       console.error('Failed to create new comment:', err);
       res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;