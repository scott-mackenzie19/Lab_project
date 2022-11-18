//console.log(__dirname+'/env')
require('dotenv').config({ path: __dirname + '/.env' })
//console.log(process.env.MYSQL_CLOUD_HOST)
//console.log(process.env)
const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const sessionRoutes = require('./routes/session');
const registerRoutes  = require('./routes/register');
const profileRoutes  = require('./routes/profile');
const eventRoutes = require('./routes/events');
const { authenticateJWT , authenticateWithClaims  } = require('./middleware/auth' );
const { createModelsMiddleware  } = require('./middleware/model-middleware' );
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(createModelsMiddleware);
app.get('/health', (request, response, next) => {
   const responseBody = { status: 'up', port };
   response.json(responseBody);
   // next() is how we tell express to continue through the middleware chain
   next();
});
app.use('/', sessionRoutes); // used to log in
app.use('/user', authenticateJWT , usersRoutes); // can be accessed after logging in
app.use('/register', registerRoutes ); // can create a user
app.use('/profile', authenticateJWT, profileRoutes)
app.use('/feed', authenticateJWT, eventRoutes);

app.listen(port, () => {
   console.log(`This app is listening on port  ${port}`);
});