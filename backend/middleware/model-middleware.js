const User = require('../models/users');
const Comments = require('../models/comments');
const createModelsMiddleware = async (req, res, next) => {
   req.models = {
      user: User,
      comments: Comments
  }
  next();
}
module.exports = {
  createModelsMiddleware
}