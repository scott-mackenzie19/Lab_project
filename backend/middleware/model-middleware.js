const User = require('../models/users');
const Friend = require('../models/friends');
const createModelsMiddleware = async (req, res, next) => {
   req.models = {
      user: User,
      friend: Friend
  }
  next();
}
module.exports = {
  createModelsMiddleware
}