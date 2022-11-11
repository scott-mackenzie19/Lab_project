const User = require('../models/users');
const Friend = require('../models/friends');
const Comments = require('../models/comments');
const Event = require('../models/events');
const createModelsMiddleware = async (req, res, next) => {
   req.models = {
      user: User,
      friend: Friend,
      comments: Comments,
      event: Event
  }
  next();
}
module.exports = {
  createModelsMiddleware
}