const { USER_ROLE } = require('../app/utils/constants');
let swaggerConfig = {
  "swagger": "2.0",
  "info": {
    "version": "2.0.0",
    "title": "Simform Task",
    "description": "Project",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "name": "Simform Team"
    },
    "license": {
      "name": "MIT"
    }
  },
  "paths": {},
  "definitions": {},
  "schemes": [
    "http",
    "https"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "securityDefinitions": {}// security definitions can be multiple
};

/** Adding Security definitions Header for each role */
// Object.keys(USER_ROLE).forEach(auth => {
//   swaggerConfig.securityDefinitions[`${USER_ROLE[auth]}TokenHeader`] = {
//     "type": "apiKey",
//     "name": "authorization",
//     "in": "header"
//   }
// });

swaggerConfig.securityDefinitions[`UserTokenHeader`] = {
  "type": "apiKey",
  "name": "authorization",
  "in": "header"
}

module.exports = swaggerConfig;
