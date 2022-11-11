const User = require('../models/users');
const Friend = require('../models/friends');
const Comments = require('../models/comments');
const createModelsMiddleware = async (req, res, next) => {
   req.models = {
      user: User,
      friend: Friend,
      comments: Comments
  }
  next();
}
module.exports = {
  createModelsMiddleware
}