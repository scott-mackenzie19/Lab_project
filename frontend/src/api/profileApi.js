import axios from 'axios';

const apiEndpoint = 'http://ec2-52-14-129-198.us-east-2.compute.amazonaws.com';

export const getAccountbyUser = (username) => new Promise ((resolve, reject) => {
    axios.get(`${apiEndpoint}/${username}`)
    .then(x => resolve(x.user, x.events, x.following))
    .catch(x => {
        alert(x);
        reject(x);
    });
});