const knexConfig = require('../knexfile');
console.log(knexConfig)
const knex = require('knex');
module.exports = knex(knexConfig.development);