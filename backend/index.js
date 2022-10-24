//console.log(__dirname+'/env')
require('dotenv').config({path:__dirname+'/.env'})
//console.log(process.env.MYSQL_CLOUD_HOST)
//console.log(process.env)
const express = require('express');
const userRoutes = require('./routes/user');
const { createModelsMiddleware  } = require('./middleware/model-middleware' );
const app = express();
const port = 3000;
app.use(createModelsMiddleware );
app.get('/health', (request, response, next) => {
   const responseBody = { status: 'up', port };
   response.json(responseBody);
   // next() is how we tell express to continue through the middleware chain
   next();
});
app.use('/users', userRoutes);
// app.use('/editprofile', editprofileRoutes)
app.listen(port, () => {
   console.log(`This app is listening on port  ${port}`);
});