require('dotenv').config({path:__dirname+'/.env'});
const knexConfig = require('../knexfile');
// process.env.TEST = 1;
// console.log(knexConfig)
// console.log(process.env.TEST)
const knex = require('knex');
module.exports = knex(knexConfig.development);