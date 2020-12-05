
const CONFIG = require('../../config');
/********************************
 **** Managing all the services ***
 ********* independently ********
 ********************************/
module.exports = {
    authService: require(`./hm/authService`),
    swaggerService: require(`./hm/swaggerService`),
    userService: require(`./hm/userService`),
};