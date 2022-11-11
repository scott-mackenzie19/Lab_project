require('dotenv').config({path:__dirname+'/.env'});
module.exports = {
    development: {
      client: 'mysql',
      debug: true,
      connection: {
        host : process.env.MYSQL_CLOUD_HOST,
        port : process.env.MYSQL_PORT,
        user : process.env.MYSQL_CLOUD_USER,
        password : process.env.MYSQL_CLOUD_PASS,
        insecureAuth: true,
        database : process.env.MYSQL_DB
      }
    }
   };