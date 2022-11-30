//console.log(__dirname+'/env')
require('dotenv').config({ path: __dirname + '/.env' })
//console.log(process.env.MYSQL_CLOUD_HOST)
//console.log(process.env)
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const sessionRoutes = require('./routes/session');
const registerRoutes  = require('./routes/register');
const profileRoutes  = require('./routes/profile');
const commentsRoutes  = require('./routes/comments' ); // check
const eventRoutes = require('./routes/events.js');
const { authenticateJWT , authenticateWithClaims  } = require('./middleware/auth' );
const { createModelsMiddleware  } = require('./middleware/model-middleware' );
const app = express();
const port = 8000;
const cors = require('cors')
const req1 = router.get("http:/localhost:8000/events")
const {fetchAllEvents} = require("./models/events.cjs");
const events = fetchAllEvents().catch;
module.exports = router;
const e = require('express');
router.use(bodyParser.json());


app.use(cors({
   origin: '*'
 }));
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
app.use('/comments', authenticateJWT, commentsRoutes ); // nested in events?
app.use('/feed', authenticateJWT, eventRoutes);

app.listen(port, () => {
   console.log(`This app is listening on port  ${port}`);
   console.log(events)
});



