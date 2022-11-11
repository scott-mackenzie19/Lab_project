const jwt = require('jsonwebtoken' );
const User = require('../models/users' );

const accessTokenSecret  = 'mysupercoolsecret' ;

const authenticateUser  = async (username, password) => {
    const user = await User.authenticateUser (username, password);
    if (user === null) {
        return user;
    }
    // console.log('Students', students);
    const accessToken = jwt.sign({ ...user, claims: ['user'] }, accessTokenSecret );
    return accessToken;
   
}
module.exports = {
    authenticateUser
};