const User = require('../models/users');
const Comments = require('../models/comments');
const createModelsMiddleware = async (req, res, next) => {
   req.models = {
      user: User
  }
  req.models = {
      comments: Comments
  }
  next();
}
module.exports = {
  createModelsMiddleware
}