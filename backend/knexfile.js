module.exports = {
    development: {
      client: 'mysql',
      debug: true,
      connection: {
        host : process.env.MYSQL_CLOUD_HOST, //'database-2.csfeg9lgj8v6.us-east-2.rds.amazonaws.com', //'127.0.0.1',
        port : process.env.MYSQL_PORT, // 3306,
        user : process.env.MYSQL_CLOUD_USER, // 'admin',
        password : process.env.MYSQL_CLOUD_PASS, //'cs3345!group2',
        insecureAuth: true,
        database : process.env.MYSQL_DB // 'db'
      }
    }
   };