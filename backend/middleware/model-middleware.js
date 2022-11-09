const User = require('../models/users');
const Event = require('../models/events');
const createModelsMiddleware = async (req, res, next) => {
  req.models = {
    user: User,
    event: Event
  }
  next();
}
module.exports = {
  createModelsMiddleware
}